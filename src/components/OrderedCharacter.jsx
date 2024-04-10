import { useSelector } from 'react-redux';

const OrderedCharacter = ({ character, index }) => {
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {character.name}
        {currentCharacterIndex === index
          ? 'Active Character'
          : 'InactiveCharacter'}
      </td>
      <td>{character.player ? 'Player' : 'NPC'}</td>
      <td>
        <button>{currentCharacterIndex}Click to remove</button>
      </td>
    </tr>
  );
};
export default OrderedCharacter;
