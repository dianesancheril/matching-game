import {useState} from 'react';
import './App.css';

function Card(props) {
    const [val, setValue] = useState('Hello')
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if(clicked === false) {
            setValue(props.value[props.i])
            setClicked(true)
        }
        else {
            setValue('Hello')
            setClicked(false)
        }
    }
    return (
        <>
        <div className='card'>
            <div className="card-value" onClick={handleClick}>{val}</div>
        </div>
        </>
    )
}

export default Card;
