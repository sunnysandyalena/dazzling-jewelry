import { useState } from 'react';
import { dataSlides } from './dataSlides';
import next from './right.png';
import back from './left.png';

function Slides() {
    const [slide, setSlide] = useState(0);
    const {slideImg, slideName} = dataSlides[slide];

    const previousSlide = () => {
        setSlide((slide => {
        slide --;
        if (slide<0) {
            return dataSlides.length -1;
        }
        return slide
    }))
    }

    const nextSlide = () => {
        setSlide ((slide => {
            slide ++;
            if (slide>dataSlides.length -1) {
                slide=0;
            }
            return slide;
        }))
    }

    return (
        <div>
            <div className="container-slides">
                <div className="container-slides-one">
                    <button className='slide-btn' onClick={previousSlide}><img src = {back} alt = 'Previous' width = '30px'/></button>
                    <img className='slide-img' src = {slideImg} alt = {slideName}/>
                    <button className='slide-btn' onClick={nextSlide}><img src = {next} alt = 'Next' width = '30px'/></button>
            </div>
                <h2>{slideName}</h2>
            </div>
        </div>
    )
}
export default Slides;