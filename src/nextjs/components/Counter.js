import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, connect } from 'react-redux'

import { incrementCount, resetCount } from '../store/actions/counterActions'
import Button from './Button'

const Counter = (props) => {
    //page visit counts
    const counter = useSelector(state => state.counterReducer.counter)

    //incrementing the counter for every pathname change (AKA every new page visit)
    const { asPath } = useRouter()
    useEffect(() => {
        props.incrementCount()
    }, [asPath])

    return (
        <div>
            <p style={{margin: 0}}>Pages Browsed Count: {counter}</p>
            <p style={{fontSize: "16px", margin: "5px 30px"}}>
                This counter is managed by redux to show the global state management flow and functionality
            </p>
            <Button onClick={() => props.resetCount()}>Reset Count</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => dispatch(incrementCount()),
        resetCount: () => dispatch(resetCount()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);