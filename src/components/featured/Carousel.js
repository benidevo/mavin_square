import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';



const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: "100vh"
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_two})`,
                            height: "100vh"
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_three})`,
                            height: "100vh"
                        }}
                    >
                    </div>
                </div>
            </Slider>
            
        </div>
    )
}

export default Carousel
