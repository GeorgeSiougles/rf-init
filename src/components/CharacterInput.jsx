import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, sortCharacters } from '../store/charactersSlice';
import ErrorMessage from './ErrorMessage';
import { FaDiceD20 } from 'react-icons/fa6';

const CharacterInput = ({ rules }) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.list);

  const [newCharacter, setNewCharacter] = useState({
    id: '',
    name: '',
    player: false,
    initiativeValue: 0,
    bonus: 0,
    conditions: [],
  });
  const [error, setError] = useState([]);

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

  const handleRollClick = (event) => {
    event.preventDefault();
    const newId = nanoid();
    let inputError = false;
    let rolledValue = 0;

    switch (rules) {
      case 'dnd':
        rolledValue = Math.floor(Math.random() * 20) + 1;
        break;
    }

    const updatedCharacter = {
      ...newCharacter,
      initiativeValue: rolledValue,
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

    dispatch(addCharacter(updatedCharacter));
    if (characters.length > 0) dispatch(sortCharacters());
    setError({ name: false, bonus: false });

    setNewCharacter({
      id: '',
      name: '',
      player: false,
      initiativeValue: 0,
      bonus: 0,
      conditions: [],
    });
  };

  return (
    <form
      className="flex-row py-2 px-2"
      onSubmit={(event) => handleRollClick(event)}
    >
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
      <button
        type="submit"
        className="btn btn-active btn-primary tooltip tooltip-bottom"
        data-tip="Click to add a character"
      >
        <FaDiceD20 size="1.5em" />
      </button>
      {error.name && <ErrorMessage message="Name cannot be empty" />}
      {error.bonus && <ErrorMessage message="Must be a valid integer" />}
    </form>
  );
};
export default CharacterInput;
