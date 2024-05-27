import { useDispatch, useSelector } from 'react-redux';
import { setRules } from '../store/charactersSlice';
import { rules } from '../utlis/rules';

const RulePicker = () => {
  const dispatch = useDispatch();
  const handleSelect = (event) => {
    dispatch(setRules(event.target.value));
  };
  const selectedRules = useSelector((state) => state.characters.rules);
  return (
    <>
      <div>Select ruleset:</div>
      <div>
        <select
          className="select select-secondary w-full max-w-xs"
          onChange={(event) => handleSelect(event)}
          defaultValue={selectedRules}
        >
          {rules.map((rule) => (
            <option key={rule.value} value={rule.value}>
              {rule.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default RulePicker;
