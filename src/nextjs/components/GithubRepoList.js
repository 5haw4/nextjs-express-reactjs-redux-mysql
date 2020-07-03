import React from 'react'

import Card from './Card'
import Link from './Link'

export default function GithubRepoList({ repos, isServer }) {
    return (
        <div>
            <h3 style={{marginBottom: "unset"}}>My 5 Latest Github Repos:</h3>
            <div style={{fontSize: "16px", maxWidth: "650px", textAlign: "left", margin: "5px 30px"}}>
                <p>
                    This following data was fetched from Github API, the API request was made within 
                    redux's async action which was called from this page's getInitialProps.
                </p>
                <p>
                    This page was rendered on the <b>{isServer ? "server" : "client"}</b> side:
                </p>
                <ul>
                    <li>To render this page on the server side reload it</li>
                    <li>To render this page on the client side - browse to one of the "dynamic links" on this 
                        web app and then click the "back" button on your browser, so the frontend router would
                        re-render this page.
                    </li>
                </ul>
            </div>
            {repos.map((item, i) => (
                <Link key={i} style={{margin: "unset", textDecoration: "none"}} href={item.url} showIcon={false}>
                    <Card title={item.name}>
                        <div style={{marginTop: "10px"}}>
                            {item.desc}
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
