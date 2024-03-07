import React from "react"

interface CardProps {
    item: {
        name: string,
        images: {
            featured: string,
        }
    }
}

export function Card( {item}: CardProps ){
    return (
        <div className = "card">
            <img src={item.images.featured} alt=""/>
            <div className="card-content">
            <h2>
                {item.name}
            </h2>
            <p>
                {item.name}
            </p>
            </div>
        </div>  
    )
}