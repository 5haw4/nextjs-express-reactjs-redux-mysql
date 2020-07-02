import React from 'react'

import Link from '../components/Link'
import Flexbox from '../components/Flexbox'
import Container from '../components/Container'
import Counter from '../components/Counter'

export default function Home() {
    return (
        <Container>
            <h1>Homepage</h1>
            <p>This is the main page of this project</p>
            <Flexbox centerItems={[
                <Link href={`/dynamic/[id]`} as={`/dynamic/LaFmQrRhJK`}>Dynamic Link</Link>,
                <Link href="https://reactjs.org">External Link</Link>
            ]} />
            <Counter />
        </Container>
    )
}
