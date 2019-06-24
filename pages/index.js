import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Section from '../components/Section'
import SEO from '../components/SEO'
import Link from 'next/link'
import '../styles/main.scss'
import '../styles/td.scss'
import '../styles/tk.scss'
import '../styles/rt.scss'
import '../styles/mt.scss'

export default () => (
  <div>
    <SEO />
    <Nav
      anchor={true}
      links={[
        {
          href: '#td',
          name: 'Технический Дизайн'
        },
        {
          href: '#tk',
          name: 'Техническое Конструирование'
        },
        {
          href: '#rt',
          name: 'Робототехника'
        },
        {
          href: '#mt',
          name: 'Медиатворчество'
        }
      ]}
    />
    <Header />
    <main className="Index">
      <Section id="td" title="Технический Дизайн" />
      <Section id="tk" title="Техническое Конструирование" />
      <Section id="rt" title="Робототехника" />
      <Section id="mt" title="Медиатворчество" />
      <footer>
        Автор сайта →&nbsp;
        <Link href="https://t.me/talentless_guy">
          <a>v1rtl</a>
        </Link>
      </footer>
    </main>
  </div>
)
