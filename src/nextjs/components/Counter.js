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
            <p>Pages Browsed Count: {counter}</p>
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