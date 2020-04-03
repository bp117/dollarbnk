import React from 'react';
import { Link } from 'routes'
import PropTypes from 'prop-types';
import { chunker } from 'tools';

const AccountsListEl = ({ matchUrl, _id, type, sortcode, currency, balance }) => {
   return (
      <Link route={`${matchUrl}/${_id}`} >
         <a className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{type} account</h5>
                <small className="text-muted">Active</small>
            </div>

            <small className="text-muted">
            Sortcode: {chunker(sortcode, 2, '-')}, currency: {currency}, balance: {balance}{' '}
            {currency}
            </small>
         </a>
      </Link>
   );
};

AccountsListEl.propTypes = {
   _id: PropTypes.string,
   type: PropTypes.string,
   sortcode: PropTypes.number,
   currency: PropTypes.string,
   balance: PropTypes.number
};

export default AccountsListEl;
