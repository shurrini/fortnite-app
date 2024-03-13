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
    return(
        <div className='hero'>
            <svg className="rtriangle" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.2H1V0Z" fill="url(#paint0_linear_19_8)"/>
                <defs>
                    <linearGradient id="paint0_linear_19_8" x1="1" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                        <stop offset="0.118964" stop-color="#FF00E6"/>
                        <stop offset="0.710534" stop-color="#5B0052"/>
                    </linearGradient>
                </defs>
            </svg>

            <img src={ item.images.featured } alt= {item.name} />
            
            <div className='hero-text'>
                <div className="fortnite">FORTNITE</div>
                <div className="item">ITEM</div>
                <div className="shop">SHOP</div>
            </div>
        </div>
    )
}