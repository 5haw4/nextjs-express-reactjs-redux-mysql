import App from 'next/app'

import withRedux from 'next-redux-wrapper'

import { Provider } from 'react-redux';
import { initStore } from '../store/reducers/rootReducer'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/index.scss'

export default withRedux(initStore)(
    class BaseApp extends App {

        static async getInitialProps(context) {
            const appProps = await App.getInitialProps(context)
            return { ...appProps }
        }

        render() {
            const { Component, pageProps, store } = this.props
            return (
                <Provider store={store}>
                    <Navbar/>
                        <div id="content">
                            <Component {...pageProps} />
                        </div>
                    <Footer/>
                </Provider>
            )
        }
    }
)