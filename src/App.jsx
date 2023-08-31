import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import ImageCarousel from './ImageCarousel'
import Img1 from './images/IMG_5208.jpg'

function App() {

  const images = [Img1, Img1, Img1, Img1];

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="card">
        <ImageCarousel images={images} />
      </div>
    </>
  )
}

export default App
