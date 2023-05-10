import {useState, useReducer, useContext} from 'react';
import './App.css';
import Score from './Score'
import { ACTIONS } from './App';
import { playsReducer } from './App';
import { scoreReducer } from './App';


function Card(props) {
    const [val, setValue] = useState('https://hotpot.ai/designs/thumbnails/background/13.jpg')
    //const [currentPlays, setCurrentPlays] = useState([])
    //const [currentPlays, dispatch] = useReducer(playsReducer, [])
    const [clicked, setClicked] = useState(false)
    const [match, setMatched] = useState(false)
    //const [currentPlayer, setCurrentPlayer] = useState();
    //const [s1, setScore1] = useState(0);
    //const [s2, setScore2] = useState(0);
    //var plays = []


    const handleClick = (event) => {

        if(clicked === false) {

            setValue(props.value[props.idx])

            //Keeping track of plays two at a time in order to compare them later
            if(props.cp.length < 2) {
                props.dispatch({type: ACTIONS.ADD_PLAY, payload: { value:props.value[props.idx]}});
            }
            setClicked(true)
        }
        else {
            //if currentPlays has 2 elements, then we call the dispatch function to compare the values
            //Once the values have been compared, we clear the the currentPlays array for the next 2 iterations.
            if (props.cp.length === 2){
            //     var s = props.dispatch({type: ACTIONS.COMPARE_PLAYS, payload:{ match:match }})
            //     console.log(s)
                 props.dispatch({type: ACTIONS.CLEAR_PLAYS});
             }
            setValue('https://hotpot.ai/designs/thumbnails/background/13.jpg')

            setClicked(false)
        }
    }

    function comparison() {
        if (props.cp.length === 2) {
          props.dispatch1({type:ACTIONS.INCREMENT})
        }
      }


    return (
        <>
        <div className='card' onChange={comparison}>
             <img src={val} onClick={handleClick} className='card-img'alt="Landscape"/>
            {/* {
                 currentPlays.length === 2 ? <Score p={currentPlays} player={currentPlayer}/> : null
            } */}
        </div>
        </>
    )
}

export default Card;
