import { useDispatch, useSelector } from 'react-redux';
import { removeCharacter } from '../../store/charactersSlice';
import Conditions from '../Conditions/Conditions';

const TableRow = ({ character, index }) => {
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );
  const dispatch = useDispatch();

  return (
    <tr className={`${currentCharacterIndex === index ? 'bg-base-200' : null}`}>
      <th className="max-w-xs">
        {+character.initiativeValue + +character.bonus}
      </th>
      <td>{character.name}</td>
      <td>{character.player ? 'Player' : 'NPC'}</td>
      <td>
        <Conditions conditions={character.conditions} id={character.id} />
      </td>
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
export default TableRow;
