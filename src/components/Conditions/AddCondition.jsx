import { Plus } from 'lucide-react';
import { conditions } from '../../utlis/allConditions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCondition } from '../../store/charactersSlice';

const AddCondition = ({ id }) => {
  const dispatch = useDispatch();
  const [newCondition, setNewCondition] = useState('');
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
    if (newCondition.trim() === 0) {
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
    }
    const condition = { condition: newCondition, duration: +newDuration };
    console.log('Calling dispatch with params: ', id, condition);
    dispatch(addCondition({ characterId: id, condition: condition }));
    setNewCondition('');
    setNewDuration('');
  };

  return (
    <label className="form-control w-full max-w-xs flex flex-row justify-center">
      <select
        className="select select-bordered"
        onChange={handleConditionSelect}
        value={newCondition}
      >
        <option value="" disabled>
          Select Condition
        </option>
        {conditions.map((condition) => (
          <option key={condition} value={condition}>
            {condition}
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
  );
};
export default AddCondition;
