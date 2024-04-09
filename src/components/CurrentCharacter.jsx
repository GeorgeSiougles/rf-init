const CurrentCharacter = () => {
  return (
    <div className="flex-row py-2 px-2">
      <div className="badge">Character Name:</div>
      <input
        type="text"
        placeholder="Enter the name"
        className="input input-bordered  max-w-xs"
        disabled
      />
      <div className="badge">Initiative Bonus:</div>
      <input
        type="number"
        placeholder="Enter total bonus"
        className="input input-bordered  max-w-xs"
        disabled
      />
      <div className="badge">Status effect</div>
      <input
        type="text"
        placeholder="prone:10"
        className="input input-bordered  max-w-xs"
      />
      <div className="badge">
        <label className="cursor-pointer label">
          <span className="label-text mx-2">Player or NPC</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info mx-2"
          />
        </label>
      </div>
    </div>
  );
};
export default CurrentCharacter;
