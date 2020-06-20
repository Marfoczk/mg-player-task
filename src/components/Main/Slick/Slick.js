import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import cover from '../../../images/cover.png'
import cover1 from '../../../images/cover-1.png'
import coverUnr from '../../../images/unreleased_cover.png'


export default function Slick({forwardedRef}) {

    const settings = {
        centerMode: true,
        // centerPadding: '-20px',
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
        adaptiveHeight: true,
        draggable: false,
        swipe: false,
        swipeToSlide: false,
      };

    return (
            <Slider ref={forwardedRef} {...settings}>
                <div className="slider-div">
                    <img alt='' src={cover}/>
                </div>
                <div className="slider-div">
                    <img alt='' src={coverUnr}/>
                </div>
                <div className="slider-div">
                    <img alt='' src={cover1}/>
                </div>
            </Slider>
    )
}
