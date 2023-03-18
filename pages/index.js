import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Section from '../components/Section'
import Link from 'next/link'

const Index = () => (
  <div>
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
        <Link href="https://t.me/talentless_guy">v1rtl</Link>
      </footer>
    </main>
  </div>
)
export default Index
