import { useDispatch } from 'react-redux';
import { setRules } from '../store/charactersSlice';

const RulePicker = () => {
  const dispatch = useDispatch();
  const handleSelect = (event) => {
    dispatch(setRules(event.target.value));
  };
  return (
    <>
      <div>Select ruleset:</div>
      <div>
        <select
          className="select select-secondary w-full max-w-xs"
          onChange={(event) => handleSelect(event)}
          defaultValue="dnd"
        >
          <option value="dnd">DnD</option>
          <option value="coc">CoC</option>
        </select>
      </div>
    </>
  );
};
export default RulePicker;
