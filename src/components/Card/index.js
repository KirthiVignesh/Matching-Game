import React from "react";
import './index.css'

function Card({card, onClick}) {

    const IsEven = ({card}) => {
        if(card.isEven === false) {
            return (
                <img src={require('..\\public\\pink-card-bg.png')} alt="pink-card"/>
            );
        } else {
            return (
                <img src={require('..\\public\\blue-card-bg.png')} alt="blue-card" />
            );
        }
    }

    return (
        <div className="card" onClick={onClick}>
            <div className="card-content">
                {card.flipped || card.matched ? card.value: <IsEven card={card} key={card.key} />}
                {/* {<IsEven card={card} key={card.key} />} */}
            </div>
        </div>
    )
}

export default Card;
