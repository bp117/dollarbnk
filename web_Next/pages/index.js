import React, {Component} from 'react'
import { getUsersCount } from 'api/common';
import PageContainer from 'hoc/PageContainer';

import Loader from 'components/UI/Loader';
import Header from 'components/Home/Header';
import Features from 'components/Home/Features';
import NewFeatures from 'components/Home/NewFeatures';

class IndexPage extends Component{
    state = {
        clientsCount: 0,
        loaded: false
    };

    static async getInitialProps() {
        const usersCount = await getUsersCount();
        const { data } = usersCount || {}

        return {
            clientsCount: data,
            loaded: true
        }
    }

    render() {
        return (
            <PageContainer>
                { !this.props.loaded ?
                    <Loader /> :
                    (
                        <div className="row">
                            <div className="col">
                                <section className="module home">
                                    <Header clientsCount={this.props.clientsCount} />
                                    <Features />
                                    <NewFeatures />
                                </section>
                            </div>
                        </div>
                    )
                }
            </PageContainer>
        )
    }
}

export default IndexPage