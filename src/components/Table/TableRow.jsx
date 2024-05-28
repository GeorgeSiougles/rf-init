import { useDispatch, useSelector } from 'react-redux';
import {
  changeAttackStyle,
  removeCharacter,
  setNeedSort,
} from '../../store/charactersSlice';
import Conditions from '../Conditions/Conditions';
import toast from 'react-hot-toast';
import MessageToast from '../Toasts/MessageToast';
import Button from '../Button';

const TableRow = ({ character, index }) => {
  const currentCharacterIndex = useSelector(
    (state) => state.characters.currentCharacterIndex
  );
  const dispatch = useDispatch();
  const rules = useSelector((state) => state.characters.rules);
  const handleCombatStyleChange = () => {
    dispatch(changeAttackStyle(character.id));
    dispatch(setNeedSort(true));
    toast.custom(
      <MessageToast
        message={`${character.name} changed attack style to ${
          character.ranged ? 'Melee' : 'Ranged'
        }`}
      />
    );
  };

  const handleRemoval = () => {
    dispatch(removeCharacter(character.id));
    toast.custom(
      <MessageToast message={`${character.name} removed from combat`} />
    );
  };

  return (
    <tr className={`${currentCharacterIndex === index ? 'bg-base-200' : null}`}>
      <th className="max-w-xs">
        {+character.initiativeValue + +character.bonus}
      </th>
      <td>{character.name}</td>
      <td>{character.player ? 'Player' : 'NPC'}</td>
      <td>
        {rules === 'dnd' && (
          <Conditions conditions={character.conditions} id={character.id} />
        )}
        {rules === 'coc' && (
          <Button
            onClick={handleCombatStyleChange}
            size="32"
            icon={`${character.ranged ? 'ranged' : 'melee'}`}
          />
        )}
      </td>
      <td>
        <Button
          className="tooltip ml-4"
          data-tip="Click to remove"
          onClick={handleRemoval}
          icon="remove"
        />
      </td>
    </tr>
  );
};
export default TableRow;
