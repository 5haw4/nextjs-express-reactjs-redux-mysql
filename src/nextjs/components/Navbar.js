import React from 'react'

import Flexbox from './Flexbox'
import Link from './Link'

export default function Navbar() {
    return (
        <div id="navbar">
            <Flexbox
                leftItems={[
                    <Link href="/" style={{margin: 0}}>
                        <h1 style={{margin: 0}}>Logo</h1>
                    </Link>
                ]}
                rightItems={[
                    <Link href={`/dynamic/[id]`} as={`/dynamic/S2uoQXsfQ2`} 
                        onClick={() => setDynamicLink(new Date().getTime())}>
                            Dynamic Link
                    </Link>,
                    <Link href="https://reactjs.org">External Link</Link>
                ]}
            />
        </div>
    )
}

