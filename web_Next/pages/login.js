import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import withAuth from 'hoc/WithAuth';
import { withRedux } from 'hoc/WithRedux';
import { isValidToken, login } from 'tools';
import { updateAPIConfig } from 'api/base';

import LoginBox from 'components/Auth/Login';
import PageContainer from 'hoc/PageContainer';

class LoginPage extends Component {

    state = {
        loading: false,
        error: null
    };

    render() {
        return (
            <PageContainer>
                <div className="row">
                    <div className="col">
                        <LoginBox
                            onLoginSubmit={this.onLoginSubmit}
                            loading={this.state.loading}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </PageContainer>
        );
    }

    onLoginSubmit = (email, password) => {
        this.setState({ loading: true, error: null });

        // Dispatch auth action
        // There will be automatic redirect to panel, in HOC
        this.props
            .login({ email, password })
            .catch(error => this.setState({ loading: false, error }));
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(actions.login(data))
    };
};

export default withRedux(connect(null, mapDispatchToProps)(withAuth(LoginPage)));
