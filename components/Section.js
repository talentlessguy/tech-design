import React from 'react'
import Link from 'next/link'
import '../styles/Section.scss'

const Section = props => (
    <section id={props.id} className="Section">
        <h1>{props.title}</h1>
        <Link href={`/${props.id}`}><a href>⟶</a></Link>
    </section>
)

export default Section