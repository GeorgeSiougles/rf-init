import { Plus } from 'lucide-react';
import { conditionsWithDescription } from '../../utlis/allConditions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCondition } from '../../store/charactersSlice';
import ErrorMessage from '../ErrorMessage';

const AddCondition = ({ id }) => {
  const dispatch = useDispatch();
  const [newCondition, setNewCondition] = useState('not-selected');
  const [newDuration, setNewDuration] = useState('');
  const [error, setError] = useState([]);

  const handleConditionSelect = (e) => {
    const selectedCondition = e.target.value;
    if (selectedCondition.trim() !== '') {
      setNewCondition(selectedCondition);
    }
    setError((prev) => {
      return { ...prev, condition: false };
    });
  };

  const handleDurationChange = (e) => {
    setNewDuration(e.target.value);
    setError((prev) => {
      return { ...prev, duration: false };
    });
  };

  const handleAddCondition = () => {
    let inputError = false;
    if (newCondition === 'not-selected') {
      inputError = true;
      setError((prev) => {
        return { ...prev, condition: true };
      });
      console.log('newCondition Error');
    }
    if (newDuration === '') {
      inputError = true;

      setError((prev) => {
        return { ...prev, duration: true };
      });
      console.log('newDuration Error');
    }
    if (inputError) {
      console.log('Condition input error', newCondition, newDuration);
      return;
    }
    const properDescription = conditionsWithDescription.filter(
      (condition) => condition.name === newCondition
    );
    const extractedDescription = properDescription[0].description;

    const condition = {
      condition: newCondition,
      duration: +newDuration,
      description: extractedDescription,
    };
    console.log('Calling dispatch with params: ', id, condition);
    dispatch(addCondition({ characterId: id, condition: condition }));
    setNewCondition('not-selected');
    setNewDuration('');
  };

  return (
    <>
      <label className="form-control w-full max-w-xs flex flex-row justify-center">
        <select
          className="select select-bordered"
          onChange={handleConditionSelect}
          value={newCondition}
        >
          <option value="not-selected" disabled>
            Select Condition
          </option>
          {conditionsWithDescription.map((condition) => (
            <option key={condition.name} value={condition.name}>
              {condition.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Duration"
          className="input w-full max-w-xs"
          onChange={handleDurationChange}
          value={newDuration}
        />
        <button onClick={handleAddCondition}>
          <Plus />
        </button>
      </label>
      {error.condition && <ErrorMessage message="Please select a condition" />}
      {error.duration && <ErrorMessage message="Must be a valid integer" />}
    </>
  );
};
export default AddCondition;
