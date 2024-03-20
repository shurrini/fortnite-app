import React from "react"

interface CardProps {
    item: {
        bundle: {
            name: string,
            image: string,
            info: string,
        }
        finalPrice: Number,
    }
}

export function BundleCard( {item}: CardProps ){
    return (
        <div className = "bundle-card">
            <img src={item.bundle.image} alt=""/>
            <div className="bundle-card-content">
                <h2>
                    {item.bundle.name}
                </h2>
                <p>
                    {item.finalPrice.toString()} VBUCKS
                </p>
            </div>
        </div>  
    )
}