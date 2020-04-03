import React, { Component } from 'react';
import Router from 'next/router';
import * as actions from 'actions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateAPIConfig } from 'api/base';
import { auth, checkValidToken, isValidToken, login } from 'tools'

// Handle redirects for /login, /register and /panel
const withAuth = WrappedComponent => {
   return class extends Component {
       static async getInitialProps (ctx) {
           // Tick the time once, so we'll have a
           // valid time before first render
           const token = auth(ctx),
               status = !!token

           const { reduxStore } = ctx,
                { dispatch } = reduxStore

           updateAPIConfig({ authToken: token })
           dispatch(actions.setAuthStatus(status))

           const componentProps =
               WrappedComponent.getInitialProps &&
               (await WrappedComponent.getInitialProps({
                   ...ctx,
                   serverAuthStatus: status,
               }))

           return {
               ...componentProps,
               serverAuthStatus: status,
           }
       }

       constructor(props) {
           super(props);

           const token = checkValidToken()
           if (token) {
               updateAPIConfig({ authToken: token });
           }
       }

       componentDidMount() {
           isValidToken()
               .then(token => {
                   this.props.setAuthStatus(true);
                   this.shouldRedirect(this.props);
               })
               .catch(() => {
                   this.props.setAuthStatus(false);
                   this.shouldRedirect(this.props);
               });
      }

      shouldComponentUpdate(nextProps) {
         this.shouldRedirect(nextProps);

         return true;
      }

      shouldRedirect(props) {
         const path = Router.pathname;
         // If we are on login/register and auth is complete, redirect to /panel
         // Otherwise redirect to /login
         if ((path === '/login' || path === '/register') && props.authStatus) {
             Router.push('/panel');
         } else if (path.startsWith('/panel') && !props.authStatus) {
             Router.push('/login');
         }
      }

      render() {
         return <WrappedComponent {...this.props} />;
      }
   };
};

const mapStateToProps = state => {
   return {
      authStatus: state.auth.status
   };
};

const mapDispatchToProps = dispatch => {
    return {
        setAuthStatus: status => dispatch(actions.setAuthStatus(status))
    };
};

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuth
);
