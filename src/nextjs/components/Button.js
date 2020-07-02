import React from 'react'

import '../styles/components/button.scss'

export default function Button(props) {
    return (
        <button className="button" {...props} />
    )
}