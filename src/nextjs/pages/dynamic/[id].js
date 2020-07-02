import React from 'react'

import Link from '../../components/Link'
import Flexbox from '../../components/Flexbox'
import Container from '../../components/Container'
import Counter from '../../components/Counter'

const Dynamic = (props) => {
	const { isServer, dynamicText } = props
	return (
		<Container>
			<h1>Dynamic Page</h1>
			<p>{dynamicText}</p>
			<p>This page was rendered on the <b>{isServer ? "server" : "client (browser)"}</b></p>
			<Flexbox centerItems={[
				<Link href="/">Homepage</Link>,
				<Link href="https://reactjs.org">External Link</Link>
			]} />
			<Counter />
		</Container>
	)
}

Dynamic.getInitialProps = async (ctx) => {
	const { id } = ctx.query
	const dynamicText = `Dynamic ID that was extracted from the URL: ${id}`
	return { dynamicText, isServer: ctx.hasOwnProperty("req") };
}

export default Dynamic