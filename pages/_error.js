import React from 'react'
import Link from 'next/link'
import '../styles/main.scss'

const Error = ({ code }) => (
  <main className="Error">
    <h1>Ой! Ошибка {code}</h1>
    <Link href="/">
      <a>Назад</a>
    </Link>
  </main>
)

Error.getInitialProps = async ({ res }) => {
  return {
    code: res.statusCode
  }
}

export default Error
