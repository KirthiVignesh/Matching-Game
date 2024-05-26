import React from "react";
import './index.css'

function Card({card, onClick}) {

    const CloasCard = ({card}) => {
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

    const OpenCard = ({card}) => {
        if(card.value === 'A') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={require('..\\public\\card-apple.jpg')} alt="apple-card" />
                );
            } else {
                return (
                    <img className="open-card" src={require('..\\public\\card-a.jpg')} alt="card-a" />
                );
            }   
        } else if(card.value === 'B') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={require('..\\public\\card-banana.jpg')} alt="banana-card" />
                )
            } else {
                return (
                    <img className="open-card" src={require('..\\public\\card-b.jpg')} alt="card-b" />
                );
            }
        } else if(card.value === 'C') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={require('..\\public\\card-cucumber.jpg')} alt="card-c" />
                )
            } else {
                return (
                    <img className="open-card" src={require('..\\public\\card-c.jpg')} alt="card-c" />
                );
            }
        } else if(card.value === 'D') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={require('..\\public\\card-df.jpg')} alt="card-d" />
                );
            } else {
                return (
                    <img className="open-card" src={require('..\\public\\card-d.jpg')} alt="card-d" />
                );
            }
        } else if(card.value === 'E') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={require('..\\public\\card-eggplant.jpg')} alt="card-e" />
                );
            } else {
                return (
                    <img className="open-card" src={require('..\\public\\card-e.jpg')} alt="card-e" />
                );
            }
        } else if(card.value === 'F') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={require('..\\public\\card-fberry.jpg')} alt="card-f" />
                );
            } else {
                return (
                    <img className="open-card" src={require('..\\public\\card-f.jpg')} alt="card-f" />
                );
            }
        }
    }

    return (
        <div className="card" onClick={onClick}>
            <div className="card-content">
                {/* {card.flipped || card.matched ? card.value: <IsEven card={card} key={card.key} />} */}
                {card.flipped || card.matched ? <OpenCard card={card} key={card.id} />: <CloasCard card={card} key={card.id} />}

            </div>
        </div>
    )
}

export default Card;
