import { useState, useEffect, useRef, useReducer } from 'react';
import './App.css';
import Card from './Card.js';
import Score from './Score';

export const ACTIONS = {
  ADD_PLAY: 'add-play',
  COMPARE_PLAYS: 'compare-plays',
  CLEAR_PLAYS: 'clear-plays',
  INCREMENT: 'increment'
}


export function scoreReducer(score1, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return score1++;
  }
}

//Reducer function to keep a record of the plays two at a time for comparison
export function playsReducer(currentPlays, action) {
  switch (action.type) {
      case ACTIONS.ADD_PLAY:
          currentPlays = [...currentPlays, newPlay(action.payload.value)];
          if (currentPlays.length === 2) {
            if (currentPlays[0].value === currentPlays[1].value) {
              //currentPlays = [];
              return currentPlays;
            }
          }
          return currentPlays;
      // case ACTIONS.COMPARE_PLAYS:
      //   if (currentPlays[0].value === currentPlays[1].value) {
      //     //action.payload.match = true;
      //     return currentPlays;
      //   } else {
      //     //action.payload.match = false;
      //     return false;
      //   }
      case ACTIONS.CLEAR_PLAYS:
          currentPlays = [];
          return currentPlays;
      default:
          return currentPlays;
  }
}

//Adds value of current card to currentPlays array. This function is called from the reducer function
function newPlay(value) {
  return { value: value}
}

function App() {
  const [cardFront, setCardFront] = useState([0])
  const [cardBack, setCardBack] = useState([])
  const [currentPlays, dispatch] = useReducer(playsReducer, [])
  const [score1, dispatch1] = useReducer(scoreReducer, 0);
  const [score2, setScore2] = useState(0);
  const fetchedRef = useRef(false);



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


  console.log('CP', currentPlays);
  return (
    <>
    <div className="title">
      <h1>
        Memory game
      </h1>
    </div>
    <div className='score1'>
      <span>Player 1: </span>

      <span>{score1}</span>
    </div>
    <div className='score2'>
      <span>Player 2: </span>
      <Score cp={currentPlays}/>
    </div>
    <div className="container">
      { cardFront?.map((k, index) => (
        <Card key={index} value={cardBack} idx={index} dispatch={dispatch} cp={currentPlays} score1={score1} dispatch1={dispatch1}/>
      ))
      }
    </div>
    <a target="_blank" href="https://icons8.com/icon/W5fSdsxmIHyq/aquarium">Aquarium</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </>
  );
}

export default App;
