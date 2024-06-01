import './App.css';
import { useEffect, useState } from 'react';
import CharacterInput from './components/CharacterInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  endTurn,
  increaseIndex,
  resetCharacters,
  resetIndex,
  resetNeedSort,
  sortCharacters,
} from './store/charactersSlice';
import Table from './components/Table/Table';
import RulePicker from './components/RulePicker';
import toast, { Toaster } from 'react-hot-toast';
import MessageToast from './components/Toasts/MessageToast';

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.list);
  const ruleSet = useSelector((state) => state.characters.rules);
  const needSort = useSelector((state) => state.characters.needSort);
  const expiredConditions = useSelector(
    (state) => state.characters.expiredConditions
  );
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );

  const [currentRound, setCurrentRound] = useState(1);

  const handleClearCharacters = () => {
    dispatch(resetCharacters());
    setCurrentRound(1);
  };

  useEffect(() => {
    expiredConditions.map((expiredCondition) =>
      toast.custom(
        <div className="flex flex-col">
          <MessageToast
            message={`${expiredCondition.condition} has run out on ${expiredCondition.characterName}`}
          />
        </div>
      )
    );
    console.log('Expired conditions:', expiredConditions);
  }, [expiredConditions]);

  const handleEndTurn = () => {
    if (currentCharacterIndex < characters.length - 1) {
      dispatch(increaseIndex());
    } else {
      dispatch(resetIndex());
      setCurrentRound((prev) => prev + 1);
      dispatch(endTurn());
      if (needSort) {
        dispatch(sortCharacters());
        dispatch(resetNeedSort());
      }
    }
  };

  return (
    <div className="flex flex-col m-2">
      <Toaster position="top-right" />
      <div>
        <CharacterInput rules={ruleSet} />
      </div>
      {characters.length === 0 && <RulePicker />}
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
          <Table headerStyle={ruleSet} bodyData={characters} />
          {/* <OrderedCharacters characters={characters} /> */}
        </div>
      ) : (
        <div className="badge mt-2">Please add some characters</div>
      )}
    </div>
  );
}

export default App;
