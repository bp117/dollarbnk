import React, {Component} from 'react'

import PageContainer from 'hoc/PageContainer';
import { withRedux } from 'hoc/WithRedux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { initialDataStatus } from 'actions/panel';
import withAuth from 'hoc/WithAuth';

import { isValidToken } from 'tools';

import Loader from 'components/UI/Loader';

import Navigation from 'containers/Navigation';
import PanelIntro from 'containers/Panel/Intro';

import Accounts from 'containers/Accounts';
import Transfers from 'containers/Transfers';
import Cards from 'containers/Cards';
import Profile from 'containers/Profile';
import ProfileChangeDetails from 'containers/Profile/ChangeDetails';
import Messages from 'containers/Messages';
import Help from 'components/Help';
import { updateAPIConfig } from 'api/base';
import nextCookie from 'next-cookies/index'
import { getMyself } from 'api/users';
import getUserInitialData from 'tools/getUserInitialData';
import * as actionTypes from '../helper/actions/actionTypes'

class PanelPage extends Component {
    static async getInitialProps(ctx) {
        const { reduxStore, query } = ctx

        const { token } = nextCookie(ctx)
        updateAPIConfig({ authToken: token })

        const { dispatch } = reduxStore

        updateAPIConfig({ authToken: token })

        try {
            const data = await getUserInitialData();

            if (!data) {
                dispatch(initialDataStatus(false));
                return;
            }

            dispatch({ type: actionTypes.FETCH_PROFILE, data: data.user });
            dispatch({ type: actionTypes.FETCH_ACCOUNTS, data: data.accounts });
            dispatch({ type: actionTypes.FETCH_TRANSFERS, data: data.transfers });
            dispatch({ type: actionTypes.FETCH_CARDS, data: data.cards });
            dispatch({ type: actionTypes.FETCH_MESSAGES, data: data.messages });
            dispatch(initialDataStatus(true));
        } catch (err) {
            dispatch(initialDataStatus(false));
        }

        return {
            query,
        }
    }

    componentDidMount() {
       isValidToken()
            .then(() => {
                this.props.fetchInitialData();
            })
            .catch(() => {
            });
    }

    render() {
        if (!this.props.initialDataStatus) {
            return <Loader />;
        } else {
            const subPage = getSubPage(this.props)

            return (
                <PageContainer>
                    <Navigation />
                    {subPage}
                </PageContainer>
            );
        }
    }
}

function getSubPage(props) {
    const { query = {} } = props,
        { slug } = query

    switch (slug) {
        case 'accounts':
            return <Accounts {...{query}}/>
            break;
        case 'transfers':
            return <Transfers {...{query}}/>
            break;
        case 'cards':
            return <Cards {...{query}}/>
            break;
        case 'profile':
            return <Profile/>
            break;
        case 'change-details':
            return <ProfileChangeDetails />
            break;
        case 'messages':
            return <Messages {...{query}}/>
            break;
        case 'help':
            return <Help />
            break;
        default:
            return <PanelIntro />
    }
}

const mapStateToProps = state => {
    return {
        initialDataStatus: state.panel.initialDataStatus,
        authStatus: state.auth.status,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setAuthStatus: status => dispatch(actions.setAuthStatus(status)),
        fetchInitialData: () => dispatch(actions.fetchInitialData())
    };
};

export default withRedux(connect(mapStateToProps, mapDispatchToProps)(withAuth(PanelPage)))