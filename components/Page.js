import React, { useState } from 'react'
import Nav from './Nav'

const Img = props => {
  const [fs, setFs] = useState(false)
  return (
    <div
      onClick={() => setFs(!fs)}
      style={
        fs
          ? {
              position: 'fixed',
              height: '100vh',
              width: '100vw',
              left: 0,
              top: 0,
              backgroundColor: 'rgba(0,0,0,0.7)'
            }
          : {}
      }>
      <img
        key=""
        alt=""
        src={props.file}
        style={
          fs
            ? {
                height: '90vh',
                position: 'fixed',
                top: '8%',
                left: 0,
                display: 'inline-block'
              }
            : {}
        }
      />
    </div>
  )
}

const Page = props => {
  return (
    <div>
      <Nav
        anchor={true}
        links={[
          {
            name: 'О кружке',
            href: '#About'
          },
          {
            name: 'Галерея',
            href: '#Works'
          },
          {
            name: 'На главную',
            href: '/'
          }
        ]}
      />
      <main className="Page" id={props.id}>
        <section id="Header">{props.children || <h1>{props.title} ⬇⬇⬇</h1>}</section>

        <section id="About">
          <h2>О кружке</h2>
          <p>{props.about}</p>
        </section>

        <section id="Works">
          <h2>Галерея</h2>
          <div>
            {props.images.map(img => (
              <figure>
                <Img file={img.file} />
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page
