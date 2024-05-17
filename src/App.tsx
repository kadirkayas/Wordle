import { useEffect, useState } from 'react';
import './App.css';
import { GamePanel } from './page/Game';
import alphabet from './data/alphabets.json';
import wordData from './data/words.json';

const keyboard = alphabet.uppercase;
const words=wordData

function App() {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [buttonClasses, setButtonClasses] = useState<string[]>(keyboard.map(() => 'key'));

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  function getRandomWord (){
    let w=words[Math.floor(Math.random() * words.length)]
    console.log(w.toUpperCase());
    return w.toUpperCase();
  };

  const handleGuess = () => {
    setCurrentGuess(currentGuess.toUpperCase());  
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess('');
  };

  return (
    <>
      <div className="game-container">
        <GamePanel word={word} guesses={guesses} />
        <form action="submit" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            maxLength={word.length}
          />
          <button onClick={handleGuess} disabled={currentGuess.length !== word.length}>Submit</button>
        </form>
      </div>
      <div className="keyboard-container">
        {keyboard.map((letter, index) => (
          <button
            key={index}
            className={buttonClasses[index]}
            onClick={() => {
              if (currentGuess.length < word.length) {
                const newGuess = currentGuess + letter;
                setCurrentGuess(newGuess);
                console.log(newGuess);
                setButtonClasses(prevClasses =>
                  prevClasses.map((cls, i) => i === index ? 'key clicked' : cls)
                );
              }
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
