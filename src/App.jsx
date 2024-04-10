import './App.css';
import { useState } from 'react';
import CharacterInput from './components/CharacterInput';
import OrderedCharacters from './components/OrderedCharacters';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseIndex,
  resetIndex,
  sortCharacters,
} from './store/charactersSlice';

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.list);
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );

  const [currentRound, setCurrentRound] = useState(1);

  const handleSortCharacters = () => {
    dispatch(sortCharacters());
  };

  const handleEndTurn = () => {
    if (currentCharacterIndex < characters.length) {
      dispatch(increaseIndex());
    } else {
      dispatch(resetIndex());
      setCurrentRound((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <CharacterInput />
        <button className="btn btn-active btn-accent m-2">Add Character</button>
        <button
          onClick={handleSortCharacters}
          className="btn btn-active btn-neutral m-2"
        >
          Sort Characters
        </button>
      </div>

      <>
        <div>
          <div className="badge">
            Current Character: #{currentCharacterIndex}
            total length: {characters.length}
          </div>
          {/* <CharacterInput /> */}
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
