import {useState} from 'react';
import './App.css';

function Card(props) {
    const [val, setValue] = useState('https://hotpot.ai/designs/thumbnails/background/13.jpg')
    const [currentPlays, setCurrentPlays] = useState([])
    const [clicked, setClicked] = useState(false)
    const [score1, setScore1] = useState(0);
    const plays = []
    const handleClick = () => {
        //document.getElementById("card-img").classList.toggle("card-show")
        if(clicked === false) {
            setValue(props.value[props.i])
            setClicked(true)
        }
        else {
            setValue('https://hotpot.ai/designs/thumbnails/background/13.jpg')
            setClicked(false)
        }
    }

    function handlePlay() {
       if(plays[0] === plays[1]) {
        setScore1(score1+1)
       }
    }

    return (
        <>
        <div className='card'>
             <img src={val} onClick={handleClick} className='card-img'/>
            {/* {
                 plays.length < 2 ? plays.push({val}) : handlePlay()
             } */}
            <div id='card-img' onClick={handleClick}>

            </div>
        </div>
        </>
    )
}

export default Card;

//
