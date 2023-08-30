import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import ImageCarousel from './ImageCarousel'
import Img1 from './images/IMG_5208.jpg'

function App() {

  const images = ['images/IMG_5208.jpg'];

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {
          images.map((src) => {
            return <img key={'asdf'} src={src} />
          })
        }
      </div>
      <div className="card">
        <ImageCarousel images={images} />
      </div>
    </>
  )
}

export default App
