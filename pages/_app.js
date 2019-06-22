import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>ТехДизайн Протвино</title>
          <meta name="description">Сайт объединения творческих кружков г. Протвино</meta>
          <meta charset="UTF-8" />
          <meta name="author" content="V!RTL (twitter.com/v1rtl)" />
          <meta name="keywords" content="Дизайн, Протвино, кружки, ДЮЦ, творчество, конструирование, робототехника" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
