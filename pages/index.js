import React from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Section from '../components/Section'
import SEO from '../components/SEO'
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
    <main className="Index">
      <Section id="td" title="Технический Дизайн" />
      <Section id="tk" title="Техническое Констр." />
      <Section id="rt" title="Робототехника" />
      <Section id="mt" title="Медиатворчество" />
    </main>
    <footer>
      <div>Адрес: РФ, Московская область, г. Протвино, ул. Гагарина, д. 2А.</div>
      <Link href="https://uslugi.mosreg.ru/services/20712">
        <a>Запись на секцию</a>
      </Link>
      <div>
        дизайн и код сайта &rarr;&nbsp;
        <Link href="https://github.com/talentlessguy">
          <a>ᐺ ! ᖇ ✝ ᒪ</a>
        </Link>
      </div>
    </footer>
  </div>
)
