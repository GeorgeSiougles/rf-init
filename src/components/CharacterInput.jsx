import { useState } from 'react';

const CharacterInput = ({ onAddCharacter }) => {
  const [newCharacter, setNewCharacter] = useState({
    characterName: '',
    initiativeBonus: '',
    statusEffects: [''],
    player: false,
    initiativeRoll: 0,
  });
  const handleNameChange = (e) => {
    setNewCharacter((prev) => {
      return { ...prev, characterName: e.target.value };
    });
  };
  const handleBonusChange = (e) => {
    setNewCharacter((prev) => {
      return { ...prev, initiativeBonus: e.target.value };
    });
  };
  const handleStatusChange = (e) => {};
  const handlePlayerChange = (e) => {
    setNewCharacter((prev) => {
      return { ...prev, player: e.target.checked };
    });
  };
  const handleRollChange = (e) => {};

  const handleRollClick = () => {
    onAddCharacter(newCharacter);
  };

  return (
    <div className="flex-row py-2 px-2">
      <div className="badge">Character Name:</div>
      <input
        type="text"
        placeholder="Enter the name"
        className="input input-bordered  max-w-xs"
        value={newCharacter.characterName}
        onChange={handleNameChange}
      />
      <div className="badge">Initiative Bonus:</div>
      <input
        min={0}
        type="number"
        placeholder="Enter total bonus"
        className="input input-bordered  max-w-xs"
        value={newCharacter.initiativeBonus}
        onChange={handleBonusChange}
      />
      <div className="badge">Status effect</div>
      <input
        type="text"
        placeholder="prone:10"
        className="input input-bordered  max-w-xs"
        value={newCharacter.statusEffects}
        onChange={handleStatusChange}
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
