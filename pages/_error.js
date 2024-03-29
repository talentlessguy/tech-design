import React from 'react'
import Link from 'next/link'

const Error = ({ code }) => (
  <main className="Error">
    <h1>Ой! Ошибка {code}</h1>
    <Link href="/">Назад</Link>
  </main>
)

Error.getInitialProps = async ({ res }) => {
  return {
    code: res.statusCode
  }
}

export default Error
