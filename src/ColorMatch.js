import React, { useState } from 'react';
import './ColorMatch.css';

function ColorMatch() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Shuffle the cards
  function generateCards() {
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff33a1', '#ff5733', '#33ff57', '#5733ff', '#ff33a1'];
    return colors
      .map((color) => ({ color, id: Math.random() }))
      .sort(() => Math.random() - 0.5);
  }

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);
      if (newFlippedCards.length === 2) {
        checkMatch(newFlippedCards);
      }
    }
  };

  const checkMatch = (flippedCards) => {
    const [firstIndex, secondIndex] = flippedCards;
    if (cards[firstIndex].color === cards[secondIndex].color) {
      setMatchedCards([...matchedCards, firstIndex, secondIndex]);
    }
    setTimeout(() => {
      setFlippedCards([]);
    }, 1000);
  };

  return (
    <div className="color-match">
      <h1>Color Match Game</h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
            style={{ backgroundColor: flippedCards.includes(index) || matchedCards.includes(index) ? card.color : '#95a5a6' }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorMatch;
