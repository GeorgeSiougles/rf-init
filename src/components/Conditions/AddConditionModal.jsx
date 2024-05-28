import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCondition } from '../../store/charactersSlice';
import ErrorMessage from '../ErrorMessage';
import toast from 'react-hot-toast';
import MessageToast from '../Toasts/MessageToast';
import Button from '../Button';
import { addCustomCondition } from '../../store/conditionsSlice';

const AddConditionModal = ({ id }) => {
  const dispatch = useDispatch();
  const conditionsWithDescription = useSelector(
    (state) => state.allConditions.conditionsWithDescription
  );
  const [newCondition, setNewCondition] = useState('not-selected');
  const [newDuration, setNewDuration] = useState('');
  const [error, setError] = useState([]);
  const [addingCustomCondition, setAddingCustomCondition] = useState(false);
  const [customCondition, setCustomCondition] = useState('');

  const handleConditionSelect = (e) => {
    const selectedCondition = e.target.value;
    if (selectedCondition.trim() !== '') {
      setNewCondition(selectedCondition);
    }
    setError((prev) => {
      return { ...prev, condition: false };
    });
  };

  const handleCustomConditionToggle = () => {
    setAddingCustomCondition((prev) => !prev);
  };

  const handleCustomConditionChange = (e) => {
    setCustomCondition(e.target.value);
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
    if (newCondition === 'not-selected' && !addingCustomCondition) {
      inputError = true;
      setError((prev) => {
        return { ...prev, condition: true };
      });
    }
    if (customCondition.trim() === '' && addingCustomCondition) {
      inputError = true;
      setError((prev) => {
        return { ...prev, condition: true };
      });
    }
    if (newDuration === '' || newDuration < 1) {
      inputError = true;

      setError((prev) => {
        return { ...prev, duration: true };
      });
    }
    if (inputError) {
      return;
    }

    let condition;

    if (addingCustomCondition) {
      condition = {
        condition: customCondition,
        duration: +newDuration,
        description: 'custom',
      };
    } else {
      const properDescription = conditionsWithDescription.filter(
        (condition) => condition.name === newCondition
      );
      const extractedDescription = properDescription[0].description;
      condition = {
        condition: newCondition,
        duration: +newDuration,
        description: extractedDescription,
      };
    }
    dispatch(addCondition({ characterId: id, condition: condition }));

    dispatch(
      addCustomCondition({
        name: condition.condition,
        description: condition.description,
      })
    );

    setNewCondition('not-selected');
    setNewDuration('');
    setCustomCondition('');
    setAddingCustomCondition(false);
    document.getElementById(id).close();
    toast.custom(
      <MessageToast
        message={`${condition.duration} rounds of ${condition.condition} added`}
      />
    );
  };

  return (
    <>
      <Button
        className="btn"
        onClick={() => document.getElementById(id).showModal()}
        icon="openConditionModal"
      />
      <dialog id={id} className="modal">
        <div className="modal-box max-w-xl sm:modal-middle modal-bottom">
          <form method="dialog">
            <Button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              icon="closeConditionModal"
            />
          </form>
          <label className="form-control w-full max-w-xs flex flex-row justify-center">
            {addingCustomCondition ? (
              <input
                placeholder="Duration"
                className="input w-full max-w-xs"
                onChange={handleCustomConditionChange}
                value={customCondition}
              />
            ) : (
              <select
                className="select select-bordered "
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
            )}

            <Button
              onClick={handleCustomConditionToggle}
              className="tooltip"
              data-tip="Click to add a custom condition"
              icon="addCustomCondition"
            />
            <input
              type="number"
              placeholder="Duration"
              className="input w-full max-w-xs"
              onChange={handleDurationChange}
              value={newDuration}
            />
            <Button
              onClick={handleAddCondition}
              className="tooltip"
              data-tip="Click to add condition"
              icon="plus"
            />
          </label>
          {error.condition && (
            <ErrorMessage message="Please select a condition" />
          )}
          {error.duration && <ErrorMessage message="Must be a valid integer" />}
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AddConditionModal;
