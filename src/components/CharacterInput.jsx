import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCharacter } from '../store/charactersSlice';

const CharacterInput = () => {
  const dispatch = useDispatch();

  const [newCharacter, setNewCharacter] = useState({
    id: '',
    name: '',
    player: false,
    rolledInitiative: 0,
    bonus: 0,
  });

  const handleNameChange = (e) => {
    setNewCharacter((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const handlePlayerChange = (e) => {
    setNewCharacter((prev) => {
      return { ...prev, player: e.target.checked };
    });
  };

  const handleBonusChange = (e) => {
    setNewCharacter((prev) => {
      return { ...prev, bonus: e.target.value };
    });
  };

  const handleRollClick = () => {
    const rolledValue = Math.floor(Math.random() * 20) + 1;
    const newId = nanoid();

    const updatedCharacter = {
      ...newCharacter,
      rolledInitiative: rolledValue,
      id: newId,
    };

    dispatch(addCharacter(updatedCharacter));

    setNewCharacter({
      id: '',
      name: '',
      player: false,
      rolledInitiative: 0,
      bonus: 0,
    });
  };

  return (
    <div className="flex-row py-2 px-2">
      <div className="badge">Character Name:</div>
      <input
        type="text"
        placeholder="Enter the name"
        className="input input-bordered  max-w-xs"
        value={newCharacter.name}
        onChange={handleNameChange}
      />
      <div className="badge">Initiative Bonus:</div>
      <input
        min={0}
        type="number"
        placeholder="Enter total bonus"
        className="input input-bordered  max-w-xs"
        value={newCharacter.bonus}
        onChange={handleBonusChange}
      />
      <div className="badge">
        <label className="cursor-pointer label">
          <span className="label-text mx-2">Player or NPC</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info mx-2"
            checked={newCharacter.player}
            onChange={handlePlayerChange}
          />
        </label>
      </div>
      <button onClick={handleRollClick} className="btn btn-active btn-primary">
        Roll
      </button>
    </div>
  );
};
export default CharacterInput;
