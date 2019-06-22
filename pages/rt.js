import React from 'react'
import Page from '../components/Page'
import img from '../util/img'
import '../styles/main.scss'
import '../styles/rt.scss'

const images = [
  {
    file: img('rt/3.jpg'),
    id: 0,
    alt: ''
  },
  {
    file: img('rt/2.jpg'),
    id: 1,
    alt: ''
  }
]

const props = {
  title: 'Робототехника',
  about: `Робототехника — кружок по сборке механизмов и полноценных машин,
    их программированию в специальных сред разработки для дальнейшего тестирования.
    Множество деталей и воображение позволяют создавать уникальные конструкции для выполнения
    различных задач. Обучение созданию происходит по готовым схемам.
    `
}

export default () => <Page id="robot" title={props.title} about={props.about} images={images} />
