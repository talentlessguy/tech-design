import '../styles/main.scss'
import '../styles/td.scss'
import '../styles/tk.scss'
import '../styles/rt.scss'
import '../styles/mt.scss'
import '../styles/Page.scss'
import '../styles/Section.scss'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ТехДизайн Протвино</title>
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="description" content="Сайт объединения творческих кружков г. Протвино" />
        <meta charSet="UTF-8" />
        <meta name="author" content="V!RTL (twitter.com/v1rtl)" />
        <meta name="keywords" content="Дизайн, Протвино, кружки, ДЮЦ, творчество, конструирование, робототехника" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
