import React from "react";
import './index.css'

function Card({card, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-content">
                {card.flipped || card.matched ? card.value: '?'}
            </div>
        </div>
    )
}

export default Card;
