import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import withAuth from 'hoc/WithAuth';

import { isValidToken } from 'tools';

import Loader from 'components/UI/Loader';

import Navigation from 'containers/Navigation';
import PanelIntro from 'containers/Panel/Intro';

import Accounts from 'containers/Accounts';
import Transfers from 'containers/Transfers';
import Cards from 'containers/Cards';
import Profile from 'containers/Profile';
import ProfileChangeDetails from 'containers/Profile/ChangeDetails';
import Messages from 'containers/Messages';
import Help from 'components/Help';

// Get all user's initial data or redirect back to /login if not logged in
// This is all handled in withAuth HOC
class Panel extends Component {

    componentDidMount() {
      isValidToken()
         .then(() => {
            this.props.fetchInitialData();
         })
         .catch(() => {

         });
   }

   render() {
      if (!this.props.initialDataStatus) {
         return <Loader />;
      } else {
          const { query = {} } = this.props,
              { slug } = query

        const subPage = (() => {
            switch (slug) {
                case 'accounts':
                    return <Accounts {...{query}}/>
                    break;
                case 'transfers':
                    return <Transfers {...{query}}/>
                    break;
                case 'cards':
                    return <Cards {...{query}}/>
                    break;
                case 'profile':
                    return <Profile/>
                    break;
                case 'change-details':
                    return <ProfileChangeDetails />
                    break;
                case 'messages':
                    return <Messages {...{query}}/>
                    break;
                case 'help':
                    return <Help/>
                    break;
                default:
                    return <PanelIntro />
            }
        })()


         return (
            <Fragment>
               <Navigation />
                {subPage}
            </Fragment>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      initialDataStatus: state.panel.initialDataStatus
   };
};

const mapDispatchToProps = dispatch => {
   return {
      setAuthStatus: status => dispatch(actions.setAuthStatus(status)),
      fetchInitialData: () => dispatch(actions.fetchInitialData())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Panel));
