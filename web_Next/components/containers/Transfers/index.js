import React from 'react';

import TransfersList from 'components/Transfers/List';
import SingleTransfer from 'components/Transfers/Single';
import NewTransfer from 'components/Transfers/New';

const Transfers = ({ query }) => {

    const subModule = getSubModule(query)

    return (
        <div className="row panel-content">
            <div className="col">
                {subModule}
            </div>
        </div>
    );
}

function getSubModule(query) {
    const { accId = 'transId' } = query
    switch (accId) {
        case 'transId':
            return <TransfersList />
            break;
        case 'new':
            return <NewTransfer />
            break;
        default:
            return <SingleTransfer {...{accId}} />
    }
}

export default Transfers;
