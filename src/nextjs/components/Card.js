import React from 'react'

import '../styles/components/card.scss'

export default function Card({ title, children }) {
    return (
        <div className="card">
            {title && <b><u>{title}</u></b>}
            {children}
        </div>
    )
}
