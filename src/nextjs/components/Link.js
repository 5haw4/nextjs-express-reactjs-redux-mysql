import React from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";

export default function MyLink(props) {
    const { href, as, style, children, showIcon = true } = props

    const isNextLink = (href && href.startsWith('/')) || !!as;
    
    //adding default styles
    const styles = { margin: "auto 5px", ...style }
    
    //creating href tag for external links
    const hrefTag = <a target="_blank" rel="noopener noreferrer" href={href} style={styles}>
        {children}
        {showIcon && <FaExternalLinkAlt style={{margin: "auto auto -2px 2.5px"}} />}
    </a>

    //passing to the nested href tag all props except of "href" and "as"
    const hrefTagProps = delete (delete ({...props}).href).as 
    //crating the JSX object for nextjs links
    const nextLink = <Link href={href} as={as}>
        <a {...hrefTagProps} style={styles}>{children}</a>
    </Link>
    
    return isNextLink ? nextLink : hrefTag
}
