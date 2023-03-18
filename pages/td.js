import React from 'react'
import Page from '../components/Page'
import img from '../util/img'

const images = [
  {
    file: img('td/1.jpg'),
    id: 0
  },
  {
    file: img('td/cherep.jpg'),
    id: 1
  }
]

const props = {
  title: 'Технический Дизайн',
  about: `Технический дизайн — очень разнонаправленный по видам деятельности кружок.
        На занятиях мы изучаем бумажное макетирование,
        изучаем технику бумагопластики, техники декорирования,
        такие как скрапбукинг, коллаж. Учимся рисовать средствами
        компьютерной растровой и векторной графики, изучаем колористику, правила композиции, векторные редакторы Illustrator и Corel Draw, растровый редактор Photoshop.`
}

export default () => <Page id="techd" title={props.title} about={props.about} images={images} />
