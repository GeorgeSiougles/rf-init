import './App.css';
import { useState } from 'react';
import CharacterInput from './components/CharacterInput';
import OrderedCharacters from './components/OrderedCharacters';
import { useDispatch, useSelector } from 'react-redux';
import {
  endTurn,
  increaseIndex,
  resetCharacters,
  resetIndex,
} from './store/charactersSlice';

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.list);
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );

  const [currentRound, setCurrentRound] = useState(1);

  const handleClearCharacters = () => {
    dispatch(resetCharacters());
  };

  const handleEndTurn = () => {
    if (currentCharacterIndex < characters.length - 1) {
      dispatch(increaseIndex());
    } else {
      dispatch(resetIndex());
      setCurrentRound((prev) => prev + 1);
      dispatch(endTurn());
    }
    console.log('Rendered from App.jsx');
    console.log('All characters:', characters);
  };

  return (
    <div className="flex flex-col m-2">
      <div>
        <CharacterInput />
      </div>

      {characters.length > 0 ? (
        <div>
          <button
            onClick={handleClearCharacters}
            className="btn btn-outline btn-error m-2"
          >
            Clear characters
          </button>
          <button
            className="btn btn-active btn-neutral m-2"
            onClick={handleEndTurn}
          >
            End turn
          </button>
          <div className="badge">Round Number #{currentRound}</div>
          <OrderedCharacters characters={characters} />
        </div>
      ) : (
        <div className="badge">Please add some characters</div>
      )}
    </div>
  );
}

export default App;

// INITIAL CODE WITH STATE

// import { useState } from 'react';
// import './App.css';
// import CharacterInput from './components/CharacterInput';
// import OrderedCharacters from './components/OrderedCharacters';

// function App() {
//   const [characters, setCharacters] = useState([]);
//   const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
//   const [currentRound, setCurrentRound] = useState(1);

//   const handleAddCharacter = (newCharacter) => {
//     setCharacters((prev) => [...prev, newCharacter]);
//   };

//   const handleEndTurn = () => {
//     if (currentCharacterIndex + 1 < characters.length)
//       setCurrentCharacterIndex((prev) => prev + 1);
//     else {
//       setCurrentCharacterIndex(0);
//       setCurrentRound((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       <div>
//         <CharacterInput onAddCharacter={handleAddCharacter} />
//         <button className="btn btn-active btn-accent m-2">Add Character</button>
//         <button className="btn btn-active btn-neutral m-2">Done rolling</button>
//       </div>

//       <>
//         <div>
//           <div className="badge">
//             Current Character: index{currentCharacterIndex}
//           </div>
//           <CharacterInput />
//           <div className="badge">Round Number #{currentRound}</div>
//           <button
//             className="btn btn-active btn-neutral"
//             onClick={handleEndTurn}
//           >
//             End turn
//           </button>
//         </div>
//         <OrderedCharacters characters={characters} />
//       </>
//     </div>
//   );
// }

// export default App;
