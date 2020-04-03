import React from 'react';

import CardsList from 'components/Cards/List';
import SingleCard from 'components/Cards/Single';
import PINChange from 'components/Cards/PINChange';
import LimitsChange from 'components/Cards/LimitsChange';

const Cards = ({ query }) => {
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
    const { accId = 'accId', changeId } = query

    switch (accId) {
        case 'accId':
            return <CardsList />
            break;
        default:
            if (changeId === 'change-pin')
                return <PINChange {...{accId}} />

            if (changeId === 'change-limits')
                return <LimitsChange {...{accId}} />

            return <SingleCard {...{accId}} />
    }
}

export default Cards;
