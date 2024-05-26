import React from 'react';
import { useEffect, useState } from 'react';
import './index.css';
import {Link} from "react-router-dom";
import Card from '../Card';
import Modal from './Modal';
import ModalPP from './ModalPP';

const initialCards = [
    { id: 1, matched: false, value: 'A', isEven:false, isImage: true},
    { id: 2, matched: false, value: 'A', isEven:true, isImage: false },
    { id: 3, matched: false, value: 'B', isEven:false, isImage: true },
    { id: 4, matched: false, value: 'B', isEven:true, isImage: false },
    { id: 5, matched: false, value: 'C', isEven:false, isImage: true },
    { id: 6, matched: false, value: 'C', isEven:true, isImage: false },
    { id: 7, matched: false, value: 'D', isEven:false, isImage: true },
    { id: 8, matched: false, value: 'D', isEven:true, isImage: false },
    { id: 9, matched: false, value: 'E', isEven:false, isImage: true },
    { id: 10, matched: false, value: 'E', isEven:true, isImage: false },
    { id: 11, matched: false, value: 'F', isEven:false, isImage: true },
    { id: 12, matched: false, value: 'F', isEven:true, isImage: false }
  ];
function ActivityScreen() {
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [lockBoard, setLockBoard] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalPP, setShowModalPP] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [points, setPoints] = useState(0)

    useEffect(() => {
      setCards(shuffleArray([...initialCards]));
    }, []);
    
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };
    const flipCard = (card) => {
    if (lockBoard || card.flipped) return;
    if (card === firstCard) return;
    
    if (!firstCard) {
        setFirstCard(card);
        setCards(cards.map(c => (c.id === card.id ? { ...c, flipped: true } : c)));
        return;
    }
    
    if(!secondCard) {
        setSecondCard(card);
        setCards(cards.map(c => (c.id === card.id ? { ...c, flipped: true } : c)));
        setLockBoard(true);
    }
    
    if (firstCard.value === card.value) {
        setCards(cards.map(c => (c.value === card.value ? { ...c, matched: true } : c)));
        setPoints(prev => prev + 1);
        setScore(score + 10);
        if (score + 10 > highScore) {
        setHighScore(score + 10);
        }
        resetBoard();
    } else {
        setTimeout(() => {
        setCards(cards.map(c => (c.id === card.id || c.id === firstCard.id ? { ...c, flipped: false } : c)));
        if(score >= 5) {
            setScore(prev => (prev - 5));
        }
        resetBoard();
        }, 1000);
    }
    };
    
    const resetBoard = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
    };
    
    const resetGame = () => {
    setScore(0);
    setPoints(0);
    setCards(shuffleArray([...initialCards]));
    };

    useEffect(() => {
      if (points === 6) {
          setShowModal(true);
      }
    }, [points]);
    
    const modalClose = () => {
        setShowModal(false);
        resetGame();
    }

    useEffect(() => {
        if(points === 1 || points === 2 || points === 3 || points === 4 || points === 5) {
            setShowModalPP(true);
        }
    }, [points]);

    return(
        <div className='activity-screen'>
            <Link to='/instruction-screen' className='back-link'>
                <div className='back-button'></div>
            </Link>
            <div className='game-cards-container'>
                <div className='scoreboard'>
                    <div>Score: {score}</div>
                    <div>High Score: {highScore}</div>
                    <div>Points: {points}</div>
                </div>
                <div className="board">
                    <div className='board-left'>
                        {
                        cards.map(card => {
                            if(card.isEven === false) {
                            return <Card key={card.id} card={card} onClick={() => flipCard(card)} />
                            }
                            return null;
                        })
                        }
                    </div>
                    <div className='board-right'>
                        {
                        cards.map(card => {
                            if(card.isEven === true) {
                            return <Card key={card.id} card={card} onClick={() => flipCard(card)} />
                            }
                            return null;
                        })
                        }
                    </div>
                </div>
            </div>
            <Modal
                isOpen={showModal}
                onClose={() => modalClose()}
                content={<p>You've reached 6 Banana's!</p>}        
            />
            <ModalPP 
                isOpen={showModalPP}
                onClose={() => setShowModalPP(false)}
                content={<p>Its a match</p>}
            />
        </div>
    )
}

export default ActivityScreen;