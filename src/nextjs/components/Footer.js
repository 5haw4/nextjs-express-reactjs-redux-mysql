import React from 'react'

import Flexbox from './Flexbox'
import Link from './Link'

export default function Footer() {
    return (
        <div id="footer">
            <Flexbox 
                style={{height: "100%"}}
                leftItems={[`All right reseved goes here © ${new Date().getFullYear()}`]}
                rightItems={[
                    <Link href={`/dynamic/[id]`} as={`/dynamic/M8dYGwhwaj`}>
                        Dynamic Link
                    </Link>,
                    <Link href="https://nextjs.org">NextJS</Link>,
                    <Link href="https://reactjs.org">ReactJS</Link>,
                    <Link href="https://react-redux.js.org/">React Redux</Link>,
                ]}
            />
        </div>
    )
}
