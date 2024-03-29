import React from 'react'
import Page from '../components/Page'
import img from '../util/img'

const images = [
  {
    file: img('tk/bear.jpg'),
    alt: 'Медведь',
    id: 0
  },
  {
    file: img('tk/town.jpg'),
    alt: 'Город',
    id: 1
  },
  {
    file: img('tk/cars.jpg'),
    alt: 'Заправка',
    id: 2
  }
]

const props = {
  title: 'Техническое конструирование',
  about: `Кружок "Техническое Конструирование" для тех — кто видит себя архитектором, проектировщиком, конструктором, дизайнером. Ребёнок, пришедший на занятия в кружек погружается в интересный мир
    изобретательства архитектуры, транспорта, арт-объектов. Он работает с
    такими материаллами как бумага, картон, клей. В процессе увлекательной
    и полезной для развития воображения, объемного видения, ребёнок
    наблюдает превращение картона и бумаги в объемные предметы.
    Программа обучения разработана таким обраом, чтобы учащиеся смогли овладеть наибольшим
    набором навыков и умений в области макетирования, создания микромоделей
    архитектуры, транспорта, объемно декоративных конструкций, уличной
    скульптуры и многого другого.`
}

export default () => <Page id="techk" title={props.title} about={props.about} images={images} />
