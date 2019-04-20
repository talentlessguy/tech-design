import React from 'react'
import Nav from '../components/Nav'
import Section from '../components/Section'
import '../styles/main.scss'
import '../styles/td.scss'
import '../styles/tk.scss'
import '../styles/rt.scss'
import '../styles/mt.scss'

export default () => (
    <div>
        <Nav anchor={true} links={[
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
        ]} />
        
        <main className="Index">
            <Section id="td" title="Технический Дизайн" />
            <Section id="tk" title="Техническое Констр." />
            <Section id="rt" title="Робототехника" />
            <Section id="mt" title="Медиатворчество" />
        </main>
        <footer>
            дизайн и код сайта &rarr; <a href="https://github.com/talentlessguy">ᐺ ! ᖇ ᖶ ᒪ</a>
        </footer>
    </div>
)