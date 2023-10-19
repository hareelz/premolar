import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <img src="https://people.com/thmb/W9jOcOXC1B3lsX6DBouggbw3dRc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/margot-robbie-barbie-072423-01e5f1f613a84e98a8eea6e80f082af1.jpg" className='img-logo'/>
        <h1 className='nav-title'>Elzar Ozubekov</h1>
        <h2 className='nav-info'>Beginner Frontend Developer</h2>
        <a href="">+996(995)-695-695</a>
        <a href="">eozubekov@gmail.com</a>
        <a href="">IK, Kyrgyzstan</a>
    </div>
  )
}

export default Navbar