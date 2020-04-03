import { Component } from 'react';
import { withRouter } from 'next/router';
import cookie from 'js-cookie'

class Logout extends Component {
   componentDidMount() {
      cookie.remove('token');
      this.props.router.push('/');
   }

   render() {
      return null;
   }
}

export default withRouter(Logout);
