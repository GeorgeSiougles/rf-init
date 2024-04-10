const OrderedCharacter = ({ character }) => {
  console.log(character);
  return (
    <tr>
      <th>{character.position}</th>
      <td>{character.player}</td>
      <td>{character.characterName}</td>
      <td>
        <button>Click to remove</button>
      </td>
    </tr>
  );
};
export default OrderedCharacter;
