import React, { useState, useEffect } from 'react';
import './MainDeck.scss';

function MainDeck() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [decks, setDecks] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/decks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setTitle('');
    setBody('');
  };

  useEffect(() => {
    fetch('http://localhost:5000/decks')
      .then((response) => response.json())
      .then((data) => {
        setDecks(data);
        console.log(data);
      });
  }, []);

  return (
    <>
   <div className='main-container'>
    <ul className='decks'>
    {decks.map((deck) => (
      <li key={deck._id}> {deck.title}</li>
    ))}
    </ul>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="deck-form">
          <div className="deck-body">
            <label htmlFor="deck-title">Deck Title</label>
            <input onChange={handleTitle} value={title} id="deck-title" />
            <label htmlFor="deck-body">Body</label>
            <textarea onChange={handleBody} value={body} id="deck-body" />
          </div>
          <div className="deck-footer">
            <button>Create</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default MainDeck;
