import React, { Component } from 'react';
import Layout from 'hoc/Layout';
import Head from 'components/Head';

class PageContainer extends Component {
    render() {
        return (
            <Layout>
                <Head />
                {this.props.children}
            </Layout>
        )
    }
}

export default PageContainer;
