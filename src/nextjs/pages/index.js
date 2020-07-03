import React from 'react'
import { useSelector } from 'react-redux'

import Link from '../components/Link'
import Flexbox from '../components/Flexbox'
import Container from '../components/Container'
import Counter from '../components/Counter'
import Divider from '../components/Divider'
import GithubRepoList from '../components/GithubRepoList'

import { fetchRepos } from '../store/actions/githubActions'

function Home({ isServer }) {
    //getting from the reducer the repos data
    const { repos } = useSelector(state => state.githubReducer)
    
    return (
        <Container>
            <h1 style={{marginBottom: 0}}>Homepage</h1>
            <Flexbox centerItems={[
                <Link href={`/dynamic/[id]`} as={`/dynamic/LaFmQrRhJK`}>Dynamic Link</Link>,
                <Link href="https://reactjs.org">External Link</Link>
            ]} />
            <Counter />
            <Divider />
            <GithubRepoList repos={repos} isServer={isServer} />
        </Container>
    )
}

Home.getInitialProps = async ({ store, req }) => {
    //async-ly calling the fetchRepos action which will fetch the data and set in the reducer
    await store.dispatch(fetchRepos())
    //providing a flag about who rendered the page for infomative purposes
    return { isServer: !!req }
}

export default Home