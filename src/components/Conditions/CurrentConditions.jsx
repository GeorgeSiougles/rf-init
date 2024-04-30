import { Minus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeCondition } from '../../store/charactersSlice';

const CurrentConditions = ({ id, conditions }) => {
  const dispatch = useDispatch();
  const handleRemoveConditionClick = (condition) => {
    console.log(
      'Called before dispatch(removeCondition)) for condition name:',
      condition
    );
    dispatch(removeCondition({ characterId: id, conditionName: condition }));
  };
  return (
    <div>
      {conditions.map((condition, index) => (
        <p key={index}>
          {condition.condition}:{condition.duration}
          <button
            onClick={() => handleRemoveConditionClick(condition.condition)}
          >
            <Minus />
          </button>
        </p>
      ))}
    </div>
  );
};
export default CurrentConditions;
