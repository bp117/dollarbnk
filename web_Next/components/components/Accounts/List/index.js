import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import AccountsListEl from '../ListElement';
import {withRouter} from 'next/router';

const AccountsList = ({ accounts, router }) => {
   // Prepare accounts list
   const accountsList = accounts.map(acc => (
      <AccountsListEl key={acc._id} {...acc} matchUrl={router.asPath} />
   ));

   return (
      <Fragment>
         <h1>Accounts</h1>

         <p>You have {accountsList.length} accounts</p>
         <div className="list-group">{accountsList}</div>
      </Fragment>
   );
};

const mapStateToProps = state => {
   return {
      accounts: state.accounts.data
   };
};

export default connect(mapStateToProps)( withRouter(AccountsList));
