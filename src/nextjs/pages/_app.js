import App from 'next/app'

import { Provider } from 'react-redux';
import Store from '../store/reducers/rootReducer'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/index.scss'

class BaseApp extends App {

    static async getInitialProps(context) {
        const appProps = await App.getInitialProps(context)
        return { ...appProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={Store}>
                <Navbar/>
                    <div id="content">
                        <Component {...pageProps} />
                    </div>
                <Footer/>
            </Provider>
        )
    }
}

export default BaseApp