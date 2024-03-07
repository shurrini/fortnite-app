import React from "react";

interface HeroProps {
    item: {
        name: string,
        images: {
            featured: string,
        }
    }
}

export function Hero( {item}: HeroProps ){
    <div className='hero'>
        <img src={ item.images.featured } alt="" />
        <div className='hero-text'>
            {item.name}
        </div>
    </div>
}