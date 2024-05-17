import { useEffect, useState } from "react";
import { Line } from "../component/Line";
interface GamePanelProps {
    word: string;
    guesses: string[];

  }


export const GamePanel: React.FC<GamePanelProps> = ({ word, guesses }) =>  {
    const[isWin, setIsWin]=useState(false)
    function checkWin() {
        if (word === guesses[guesses.length - 1]) {
            setIsWin(true)
        }
    }
    useEffect(() => {
        checkWin()
    }, [guesses])

    return (
        <div>
            {guesses.map((guess,index)=>(
                <Line key={index} guess={guess} word={word}/>
            ))}
            {isWin && <h1 style={{color:"green"}}>You Winn!!!</h1>}
        </div>
    )
}