import React from "react";
import './index.css';
import pinkCardBg from '../../images/pink-card-bg.png';
import blueCardBg from '../../images/blue-card-bg.png';
import Acard from '../../images/card-a.jpg';
import AppleCard from '../../images/card-apple.jpg';
import Bcard from '../../images/card-b.jpg';
import BananaCard from '../../images/card-banana.jpg';
import Ccard from '../../images/card-c.jpg';
import CucumberCard from '../../images/card-cucumber.jpg';
import Dcard from '../../images/card-d.jpg';
import DFCard from '../../images/card-df.jpg';
import Ecard from '../../images/card-e.jpg';
import EPCard from '../../images/card-eggplant.jpg';
import Fcard from '../../images/card-f.jpg';
import FBCard from '../../images/card-fberry.jpg';


function Card({card, onClick}) {

    const CloasCard = ({card}) => {
        if(card.isEven === false) {
            return (
                <img src={pinkCardBg} alt="pink-card"/>
            );
        } else {
            return (
                <img src={blueCardBg} alt="blue-card" />
            );
        }
    }

    const OpenCard = ({card}) => {
        if(card.value === 'A') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={AppleCard} alt="apple-card" />
                );
            } else {
                return (
                    <img className="open-card" src={Acard} alt="card-a" />
                );
            }   
        } else if(card.value === 'B') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={BananaCard} alt="banana-card" />
                )
            } else {
                return (
                    <img className="open-card" src={Bcard} alt="card-b" />
                );
            }
        } else if(card.value === 'C') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={CucumberCard} alt="card-c" />
                )
            } else {
                return (
                    <img className="open-card" src={Ccard} alt="card-c" />
                );
            }
        } else if(card.value === 'D') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={DFCard} alt="card-d" />
                );
            } else {
                return (
                    <img className="open-card" src={Dcard} alt="card-d" />
                );
            }
        } else if(card.value === 'E') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={EPCard} alt="card-e" />
                );
            } else {
                return (
                    <img className="open-card" src={Ecard} alt="card-e" />
                );
            }
        } else if(card.value === 'F') {
            if(card.isImage) {
                return (
                    <img className="open-card" src={FBCard} alt="card-f" />
                );
            } else {
                return (
                    <img className="open-card" src={Fcard} alt="card-f" />
                );
            }
        }
    }

    return (
        <div className="card" onClick={onClick}>
            <div className="card-content">
                {card.flipped || card.matched ? <OpenCard card={card} key={card.id} />: <CloasCard card={card} key={card.id} />}
            </div>
        </div>
    )
}

export default Card;
