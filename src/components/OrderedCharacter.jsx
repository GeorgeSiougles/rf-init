import { useDispatch, useSelector } from 'react-redux';
import { removeCharacter } from '../store/charactersSlice';

const OrderedCharacter = ({ character, index }) => {
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );
  const dispatch = useDispatch();

  return (
    <tr className={`${currentCharacterIndex === index ? 'bg-base-200' : null}`}>
      <th>{+character.rolledInitiative + +character.bonus}</th>
      <td>{character.name}</td>
      <td>{character.player ? 'Player' : 'NPC'}</td>
      <td>
        <button
          onClick={() => {
            dispatch(removeCharacter(character.id));
          }}
        >
          Click to remove
        </button>
      </td>
    </tr>
  );
};
export default OrderedCharacter;
