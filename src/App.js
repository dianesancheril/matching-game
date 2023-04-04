import { useState, useEffect } from 'react';
import './App.css';
import Card from './Card.js';

function App() {
  const [cardFront, setCardFront] = useState([0])
  const [cardBack, setCardBack] = useState([])
  const [isFlipped, setIsFlipped] = useState(false)
  const [numberPlays, setNumberPlays] = useState(0)

  useEffect(() => {
    var back=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    var front = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    setCardFront(front)
    for (var i = 16 - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = back[i];
        back[i] = back[j];
        back[j] = temp;
      }
    setCardBack(back)
  }, [])

  function play(props) {
    cardFront[props] = cardBack[props]
  }


  return (
    <>
    <div className="title">
      <h1>
        Memory game
      </h1>
    </div>
    <div className="container">
      { cardFront?.map((k, index) => (
        <Card value={cardBack} i={index}/>
      ))
}
    </div>
    </>
  );
}

export default App;
