import React from 'react'
import Link from 'next/link'
import AnchorLink from './AnchorLink'

const Nav = props => (
  <nav className="Nav">
    <input type="checkbox" id="checkbox" />
    <label htmlFor="checkbox">&#9776;</label>
    {props.links.map(link =>
      props.anchor ? (
        <Link href={link.href || ''}>
          <a>{link.name}</a>
        </Link>
      ) : (
        <AnchorLink href={link.href} title={link.name} />
      )
    )}
  </nav>
)

export default Nav
