import React from 'react';
import { useState } from 'react';
import './ImageCarousel.css'

export default function ImageCarousel({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSLide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='carousel'>
            <button className='prev-button' onClick={goToPrevSlide}>
                &lt;
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <button className='next-button' onClick={goToNextSLide}>
                &gt;
            </button>
        </div>
    )
}
