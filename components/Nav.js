import React from 'react'
import Link from 'next/link'
import AnchorLink from './AnchorLink'

const Nav = props => (
  <nav className="Nav">
    <input type="checkbox" id="checkbox" />
    <label htmlFor="checkbox">&#9776;</label>
    {props.links.map((link, i) =>
      props.anchor ? (
        <Link key={i} href={link.href}>
          {link.name}
        </Link>
      ) : (
        <AnchorLink key={i} href={link.href} title={link.name} />
      )
    )}
  </nav>
)

export default Nav
