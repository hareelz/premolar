import React from 'react'
import '../Experience/Experience.css'

const Experience = () => {
  return (
    <div className='Experience'>
        <h1 className='Experience-title'>Experience</h1>
            <h2 className='Experience-name'>Tesla</h2>
            <p className='Experience-year'>2015-2020</p>
            <p className='Experience-prof'>Frontend Developer</p>
            <p className='Experience-desc'>Разрабатывал основной сайт который находится на просторах интернета,
            проработал почти 5 лет и получил безценный опыт, так же познокомился с Джейсноном Стехемом, он научил меня как надо говорить цитаты свои(Работа это не волк, работа это work, волк это гулять)</p>
            <h2 className='Experience-name'>DO-DO</h2>
            <p className='Experience-year'>2014-2018</p>
            <p className='Experience-prof'>Оператор</p>
            <p className='Experience-desc'>Много знать не надо но можете посмотреть из за чего уволили, вы можете посмотреть видео кликнув <a href="https://vk.com/video-53484080_456240189">СЮДА</a></p>
    </div>
  )
}

export default Experience