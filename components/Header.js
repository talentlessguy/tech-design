import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header>
    <div className="grid">
      <div>
        <h1>ТехДизайн</h1>
        <p>
          Объединения, дающие возможность развить творческие навыки- рисование, конструирование, дизайнерские навыки,
          лепка и многие другие, предоставляя и материал для работы.
        </p>
      </div>
      <div>
        <h1>Адрес</h1>
        РФ, Московская область, г. Протвино, ул. Гагарина, д. 2А.
      </div>
      <div>
        <h1>Запись</h1>
        <Link href="https://uslugi.mosreg.ru/services/20712">
          <a>Через Госуслуги</a>
        </Link>
      </div>
      <div>
        <h1>Контакты</h1>
        <Link href="mailto:allashukova@yandex.ru">
          <a>e-mail педагога</a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
