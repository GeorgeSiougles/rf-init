import { useState } from 'react';
import './App.css';
import CharacterInput from './components/CharacterInput';
import OrderedCharacters from './components/OrderedCharacters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  const handleEndTurn = () => {
    console.log('clicked! ', currentCharacterIndex);
    if (currentCharacterIndex + 1 < characters.length)
      setCurrentCharacterIndex((prev) => prev + 1);
    else {
      setCurrentCharacterIndex(0);
      setCurrentRound((prev) => prev + 1);
    }
  };

  const handleAddCharacter = (newCharacter) => {
    console.log(newCharacter);
    setCharacters((prev) => [...prev, newCharacter]);
  };
  return (
    <div className="flex flex-col">
      <div>
        <CharacterInput onAddCharacter={handleAddCharacter} />
        <button className="btn btn-active btn-accent m-2">Add Character</button>
        <button className="btn btn-active btn-neutral m-2">Done rolling</button>
      </div>

      <>
        <div>
          <div className="badge">
            Current Character: index{currentCharacterIndex}
          </div>
          <CharacterInput />
          <div className="badge">Round Number #{currentRound}</div>
          <button
            className="btn btn-active btn-neutral"
            onClick={handleEndTurn}
          >
            End turn
          </button>
        </div>
        <OrderedCharacters characters={characters} />
      </>
    </div>
  );
}

export default App;
