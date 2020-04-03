import React from 'react';

import Logout from 'components/Auth/Logout';
import PageContainer from 'hoc/PageContainer';

const LogoutPage = (props) => {
    return (
        <PageContainer>
            <Logout {...props} />
        </PageContainer>
    )
}

export default LogoutPage