const CharacterInput = () => {
  return (
    <div className="flex-row py-2 px-2">
      <div className="badge">Character Name:</div>
      <input
        type="text"
        placeholder="Enter the name"
        className="input input-bordered  max-w-xs"
      />
      <div className="badge">Initiative Bonus:</div>
      <input
        type="number"
        placeholder="Enter total bonus"
        className="input input-bordered  max-w-xs"
      />
      <button className="btn btn-active btn-primary">Roll</button>
    </div>
  );
};
export default CharacterInput;
