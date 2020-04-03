import React, {Component} from 'react'
import PageContainer from 'hoc/PageContainer';

import axios from 'axios';
import Loader from 'components/UI/Loader';

import Header from 'components/CurrencyStats/Header';
import CurrencySettings from 'components/CurrencyStats/CurrencySettings';
import CurrencyList from 'components/CurrencyStats/List';
import SingleButton from 'components/UI/Buttons/SingleButton';

import subDays from 'date-fns/subDays';
import format from 'date-fns/format';

import 'containers/CurrencyStats/style.scss';

const initData = {
    currencies: 'GBP,AUD,CAD,CHF,CZK,EUR,HUF,JPY,NOK,PLN,RUB,SEK,USD'.split(','),
    baseCurrency: 'GBP',
    date: subDays(new Date(), 1),
}

class CurrenciesPage extends Component {
    static async getInitialProps() {
        const currencyData = await getCurrencyData({ ...initData })

        return {
            ...initData,
            currencyData,
            loaded: true,
        }
    }

    state = {
        ...initData,
        currencyData: [],
        loaded: false
    };

    render() {
        const data = this.state.browser ?
            this.state :
            {
                ...this.props,
                date: subDays(new Date(), 1),
            }

        if (this.state.browser && !this.state.loaded) {
            return <Loader />;
        } else {
            return (
                <PageContainer>
                    <div className="row">
                        <div className="col">
                            <section className="module container-module currency-stats">
                                <div className="currency-stats-header text-center">
                                    <Header />
                                    <CurrencySettings
                                        date={data.date}
                                        currencies={data.currencies}
                                        baseCurrency={data.baseCurrency}
                                        onBaseCurrencyChange={this.onBaseCurrencyChange}
                                        onCurrencyDateChange={this.onCurrencyDateChange}
                                    />
                                </div>

                                <CurrencyList
                                    currencyData={data.currencyData}
                                    baseCurrency={data.baseCurrency}
                                />

                                <div className="currency-stats-leave-section">
                                    <SingleButton text="Go back to home page &raquo;" href="/" size="lg" />
                                </div>
                            </section>
                        </div>
                    </div>
                </PageContainer>
            );
        }
    }

    makeAPIRequest() {
        const { currencies, baseCurrency, date } = this.state
        getCurrencyData({ currencies, baseCurrency, date })
            .then(currencyData => {
                this.setState({ currencyData, loaded: true, browser: true });
            })
            .catch(() => this.setState({ loaded: 0 }));
    }

    onBaseCurrencyChange = baseCurrency => {
        this.setState({ baseCurrency, loaded: false }, () => {
            this.makeAPIRequest();
        });
    };

    onCurrencyDateChange = date => {
        this.setState({ date, loaded: false }, () => {
            this.makeAPIRequest();
        });
    };
}

function getCurrencyData({ currencies, baseCurrency, date }) {
    return new Promise((resolve, reject) => {
        // Remove baseCurrency from currencies list - it wouldn't make any sense
        // Then, convert it from array to string (needed for API request)

        const symbols = currencies
            .filter(curr => curr !== baseCurrency)
            .join(',');

        let apiParams = {
            symbols,
            base: baseCurrency
        };

        // If date is set - add it to request
        if (date) {
            apiParams.date = format(date, 'yyyy.MM.dd');
        }

        axios
            .get('https://api.exchangeratesapi.io/latest', { params: apiParams })
            .then(res => res.data)
            .then(currencyData => {
                resolve(currencyData)
            })
            .catch(() => reject());
    })
}

export default CurrenciesPage