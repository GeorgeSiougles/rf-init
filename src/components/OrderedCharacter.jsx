import { useSelector } from 'react-redux';

const OrderedCharacter = ({ character, index }) => {
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );

  return (
    <tr className={`${currentCharacterIndex === index ? 'bg-base-200' : null}`}>
      <th>{+character.rolledInitiative + +character.bonus}</th>
      <td>{character.name}</td>
      <td>{character.player ? 'Player' : 'NPC'}</td>
      <td>
        <button>Click to remove</button>
      </td>
    </tr>
  );
};
export default OrderedCharacter;
