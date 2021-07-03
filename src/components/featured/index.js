import React from 'react';
import Carousel from './Carousel';
import CountDown from './CountDown';
 
const Featured = () => {
    return (
        <div className="featured_container ">
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">Ariana Grande</div>
            </div>
            <CountDown />
        </div>
    )
}

export default Featured
