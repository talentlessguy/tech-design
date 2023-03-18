import React from 'react'
import Link from 'next/link'

const Section = props => (
  <section id={props.id} className="Section">
    <h1>{props.title}</h1>
    <Link href={`/${props.id}`}>⟶</Link>
  </section>
)

export default Section
