import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, sortCharacters } from '../store/charactersSlice';
import ErrorMessage from './ErrorMessage';
import toast from 'react-hot-toast';
import RollToast from './Toasts/RollToast';
import MessageToast from './Toasts/MessageToast';
import Button from './Button';

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
    ranged: false,
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

  const handleRangedChange = (e) => {
    setNewCharacter((prev) => {
      return {
        ...prev,
        ranged: e.target.checked,
      };
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
      case 'coc':
        rolledValue = 0 + newCharacter.ranged ? 50 : 0;
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
    toast.custom(
      <div className="flex flex-col">
        {rolledValue !== 0 && (
          <RollToast name={updatedCharacter.name} roll={rolledValue} />
        )}
        <MessageToast message={`${updatedCharacter.name} has been added!`} />
      </div>
    );

    setNewCharacter({
      id: '',
      name: '',
      player: false,
      initiativeValue: 0,
      bonus: 0,
      conditions: [],
      ranged: false,
    });
  };

  return (
    <form
      className="flex-row py-2 px-2 w-full"
      onSubmit={(event) => handleRollClick(event)}
    >
      <div className="badge mx-1">Character Name:</div>
      <input
        type="text"
        placeholder="Enter the name"
        className="input input-bordered  max-w-xs"
        value={newCharacter.name}
        onChange={handleNameChange}
      />
      <div className="badge mx-1">Initiative:</div>
      <input
        type="number"
        placeholder="Enter total bonus"
        className="input input-bordered max-w-xs"
        value={newCharacter.bonus}
        onChange={handleBonusChange}
      />
      <div className="badge mx-1">
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
      {rules === 'coc' && (
        <div className="badge mx-1">
          <label className="cursor-pointer label">
            <span className="label-text mx-2">Ranged or Melee</span>
            <input
              type="checkbox"
              className="checkbox checkbox-info mx-2"
              checked={newCharacter.ranged}
              onChange={handleRangedChange}
            />
          </label>
        </div>
      )}
      <Button
        type="submit"
        className="btn btn-active btn-primary tooltip tooltip-bottom"
        data-tip="Click to add a character"
        icon="d20"
        size="1.5em"
      />
      {error.name && <ErrorMessage message="Name cannot be empty" />}
      {error.bonus && <ErrorMessage message="Must be a valid integer" />}
    </form>
  );
};
export default CharacterInput;
