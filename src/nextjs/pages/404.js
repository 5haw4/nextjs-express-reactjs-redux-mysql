import React from 'react'

import Link from '../components/Link'
import Flexbox from '../components/Flexbox'
import Container from '../components/Container'

export default function NotFound() {
    return (
        <Container>
            <h1>Page Not Found</h1>
            <p>404 | Page Not Fount</p>
            <Flexbox centerItems={[
                <Link href="/">Homepage</Link>,
                <Link href={`/dynamic/[id]`} as={`/dynamic/JVGe0RsdLX`}>Dynamic Link</Link>,
                <Link href="https://reactjs.org">External Link</Link>
            ]} />
        </Container>
    )
}
