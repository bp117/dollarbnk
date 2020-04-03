import React from 'react';

import Register from 'containers/Auth/Register';
import PageContainer from 'hoc/PageContainer';
import { withRedux } from 'hoc/WithRedux';

const RegisterPage = (props) => {
    return (
        <PageContainer>
            <Register {...props} />
        </PageContainer>
    )
}


export default withRedux(RegisterPage)