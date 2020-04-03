import React from 'react';

import MessagesList from 'components/Messages/List';
import SingleMessage from 'components/Messages/Single';

const Messages = ({ query }) => {
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
    const  messageId = query.accId || 'messageId'
    switch (messageId) {
        case 'messageId':
            return <MessagesList {...{messageId}}/>
            break;
        default:
            return <SingleMessage {...{messageId}} />
    }
}

export default Messages;
