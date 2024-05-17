import { Block } from "./Block";

interface LineProps {
    guess: string;
    word: string;
  }
  export const Line: React.FC<LineProps> = ({ guess, word }) => {
    const getBlockStatus=(letter: string,index: number)=>{
        
        if(word[index]===letter){
             return "correct";
        } 
        else if (word.includes(letter)) return "have"
        else return "wrong"
    }   
    
    return (
        <div>
            {guess.split('').map((letter: string,index: number)=>(
                <Block key={index} letter={letter.toUpperCase()} status={getBlockStatus(letter,index)}/>
            ))
            }   
            
        </div>
    )
}