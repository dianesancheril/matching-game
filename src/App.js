import { useState, useEffect, useRef } from 'react';
import './App.css';
import Card from './Card.js';


function App() {
  const [cardFront, setCardFront] = useState([0])
  const [cardBack, setCardBack] = useState([])
  const fetchedRef = useRef(false);
  const [currentPlayer, setCurrentPlayer] = useState()

  const fetchData = async () => {
    try {
      var response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=8', {
        headers: {
          Authorization:'563492ad6f917000010000014411aab966cf4148966882b0bd0569df'
        }
      })
      var data = await response.json();
      console.log(data)
      var photos=[];
      for (var i=0; i<8; i++) {
        photos.push(data.photos[i].src['tiny'])
        photos.push(data.photos[i].src['tiny'])
      }
      console.log(photos)
      var front = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      setCardFront(front)
      for (var i = 16 - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = photos[i];
        photos[i] = photos[j];
        photos[j] = temp;
      };
      setCardBack(photos)
      console.log(cardBack)
    } catch (error) {
      console.log('error')
    }
  };


  useEffect(() => {
    if(fetchedRef.current) return;
    fetchedRef.current = true;
    fetchData();
  }, [])


  return (
    <>
    <div className="title">
      <h1>
        Memory game
      </h1>
    </div>
    <div className="container">
      { cardFront?.map((k, index) => (
        <Card key={index} value={cardBack} i={index}/>
      ))
      }
    </div>
    <a target="_blank" href="https://icons8.com/icon/W5fSdsxmIHyq/aquarium">Aquarium</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </>
  );
}

export default App;
