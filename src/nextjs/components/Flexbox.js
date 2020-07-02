import React from 'react'

import '../styles/components/flexbox.scss'

export default function Flexbox(props) {
    const { leftItems, centerItems, rightItems } = props
    return (
        <div className="flexbox" style={props.style}>
            <div className="flexbox">
                {leftItems && leftItems.map((item,i) => <div key={i}>{item}</div>)}
            </div>
            <div className="flexbox">
                {centerItems && centerItems.map((item,i) => <div key={i}>{item}</div>)}
            </div>
            <div className="flexbox">
                {rightItems && rightItems.map((item,i) => <div key={i}>{item}</div>)}
            </div>
        </div>
    )
}