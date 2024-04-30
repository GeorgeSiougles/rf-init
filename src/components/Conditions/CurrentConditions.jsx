import { Minus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeCondition } from '../../store/charactersSlice';
import { conditionsWithDescription } from '../../utlis/allConditions';

const CurrentConditions = ({ id, conditions }) => {
  const dispatch = useDispatch();
  const handleRemoveConditionClick = (condition) => {
    console.log(
      'Called before dispatch(removeCondition)) for condition name:',
      condition
    );
    console.log(
      'Attemt to access the condition description:',
      conditionsWithDescription[condition.condition]
    );
    dispatch(removeCondition({ characterId: id, conditionName: condition }));
  };
  return (
    <div>
      {conditions.map((condition, index) => (
        <p className="tooltip" data-tip={condition.description} key={index}>
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
