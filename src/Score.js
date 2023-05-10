// import { createContext, useState, useReducer, useContext } from "react";

// export const ScoreContext = createContext() //creates a score context

// //Creating a context provider
// export const ScoreProvider = (props) => {
//     const [score1, setScore1] = useState(0)
//     const [score2, setScore2] = useState(0)
//     return (
//         <ScoreContext.Provider>
//             value = {{
//                 score1,
//                 setScore1,
//                 score2,
//                 setScore2,
//             }}
//             {props.children} {/*allows us to render components nested within the provider*/}
//         </ScoreContext.Provider>
//     )
// }


import {useState, useEffect} from 'react';
import './App.css';
import './Card'

function Score(props) {
    var [score1, setScore1] = useState(0)
    var [score2, setScore2] = useState(0)
    var s1 = 0;
    var s2 = 0;

    const fetchData = () => {
        if(props.cp[0] === props.cp[1]) {
            setScore2(score2+1)
        // if (props.player === 1) {
        //     // s1 += 1
        //     setScore1(score1++)
        // } else if (props.player === 2) {
        //     // s2 += 1
        //     setScore2(score2++)
        // }
        }
    }

    useEffect (() => {
        fetchData();
    },[])
return (
    <>
    <span>{score2}</span>
    </>
)
}

export default Score;
