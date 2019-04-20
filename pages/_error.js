import React from 'react'
import Link from 'next/link'
import '../styles/main.scss'

const Error = props => (
    <main className="Error">
        <h1>Дебил не лезь</h1>
        <h3>Ошибка {props.code}</h3>
        <Link href="/"><a>Слышь быро назад</a></Link>
    </main>
)

Error.getInitialProps = async ({ res }) => {
    return {
        code: res.statusCode
    }
}

export default Error