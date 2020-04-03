import React, { Component } from 'react';
import { Link } from 'routes';
import { connect } from 'react-redux';
import {withRouter} from 'next/router';

import TransfersListEl from '../ListElement';

class TransfersList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         search: ''
      };
   }

   findTransfer = () => {
      this.setState({ search: this.refs.search.value });
   };

   render() {
      // Allow filtering by payee's name or transfer reference
      const searchText = this.state.search.toLowerCase();
      const transfersList = this.props.transfers
         .filter(
            trans =>
               trans.payeeName.toLowerCase().includes(searchText) ||
               trans.reference.toLowerCase().includes(searchText)
         )
         .map(trans => (
            <TransfersListEl key={trans._id} {...trans} matchUrl={this.props.router.asPath} />
         ));

      return (
         <div>
            <h1>Transfers</h1>

            <p>There are {this.props.transfers.length} transfers right now!</p>
            <p>
               <Link route={`${this.props.router.asPath}/new`} >
                  <a className="btn btn-primary">
                   New transfer
                  </a>
               </Link>
            </p>

            <div className="form-group">
               <input
                  className="form-control"
                  placeholder="Search for (payee/reference)..."
                  onChange={this.findTransfer}
                  ref="search"
               />
            </div>

            <div className="list-group">{transfersList}</div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      transfers: state.transfers.data,
      transfersCount: 20 // FAKE IT: better API needed
   };
};

export default connect(mapStateToProps)(withRouter(TransfersList));
