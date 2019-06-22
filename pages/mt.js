import React from 'react'
import Page from '../components/Page'
import img from '../util/img'
import '../styles/main.scss'
import '../styles/mt.scss'

const images = [
  {
    file: img('mt/mandarin.jpg'),
    id: 0,
    alt: 'Мандарин'
  },
  {
    file: img('mt/car.jpg'),
    id: 1,
    alt: 'Машина'
  },
  {
    file: img('mt/forest.jpg'),
    id: 2,
    alt: 'Лес'
  }
]

const props = {
  title: 'Медиатворчество',
  about: `Медиатворчество — очень многосторонее и разнообразное направление. Например чтобы сделать мультфильм надо придумать сценарий, сдеть сцены с декорациями, где будут происходить съемки и  сделать героев, придумать им характерные особенности, манеры, повадки, характеры. Все это надо снять, озвучить, и смонтировать в конечный продукт - мультфильм. Эта деятельность самая разносторонняя и увлекательная.
    `
}

export default () => <Page id="media" title={props.title} about={props.about} images={images} />
