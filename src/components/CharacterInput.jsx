import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCharacter } from '../store/charactersSlice';
import ErrorMessage from './ErrorMessage';

const CharacterInput = () => {
  const dispatch = useDispatch();

  const [newCharacter, setNewCharacter] = useState({
    id: '',
    name: '',
    player: false,
    rolledInitiative: 0,
    bonus: 0,
  });
  const [error, setError] = useState({ name: false, bonus: false });

  const handleNameChange = (e) => {
    setNewCharacter((prev) => {
      return { ...prev, name: e.target.value };
    });
    setError((prev) => {
      return { ...prev, name: false };
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
    setError((prev) => {
      return { ...prev, bonus: false };
    });
  };

  const handleRollClick = () => {
    const rolledValue = Math.floor(Math.random() * 20) + 1;
    const newId = nanoid();
    let inputError = false;

    const updatedCharacter = {
      ...newCharacter,
      rolledInitiative: rolledValue,
      id: newId,
    };
    if (updatedCharacter.bonus === '') {
      setError((prev) => {
        return { ...prev, bonus: true };
      });
      inputError = true;
    }
    if (updatedCharacter.name.trim() === '') {
      setError((prev) => {
        return { ...prev, name: true };
      });
      inputError = true;
    }
    if (inputError) return;
    console.log('Character to instert:', updatedCharacter);
    console.log('Initiative:', updatedCharacter.bonus);
    dispatch(addCharacter(updatedCharacter));
    setError({ name: false, bonus: false });

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
      {error.name && <ErrorMessage message="Name cannot be empty" />}
      {error.bonus && <ErrorMessage message="Must be a valid integer" />}
    </div>
  );
};
export default CharacterInput;
