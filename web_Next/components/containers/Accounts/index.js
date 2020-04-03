import React from 'react';

import AccountsList from 'components/Accounts/List';
import SingleAccount from 'components/Accounts/Single';

const Accounts = ({ query = {} }) => {

    const subModule = getSubModule(query)

    return (
        <div className="row panel-content">
            <div className="col">
                {subModule}                
            </div>
        </div>
    )
};

function getSubModule(query) {
    const { accId = 'accId' } = query
    switch (accId) {
        case 'accId':
            return <AccountsList />
            break;
        default:
            return <SingleAccount {...{accId}} />
    }
}

export default Accounts;
