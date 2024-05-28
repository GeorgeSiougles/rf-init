import { useDispatch } from 'react-redux';
import { removeCondition } from '../../store/charactersSlice';
import ConditionDrawer from './ConditionDrawer';
import Button from '../Button';

const CurrentConditions = ({ id, conditions }) => {
  const dispatch = useDispatch();
  const handleRemoveConditionClick = (condition) => {
    dispatch(removeCondition({ characterId: id, conditionName: condition }));
  };
  return (
    <div className="flex">
      {conditions.map((condition, index) => (
        <div
          className="tooltip btn badge"
          data-tip="Click for more info"
          key={index}
        >
          <ConditionDrawer
            condition={condition.condition}
            duration={condition.duration}
            description={condition.description}
          />
          <Button
            className="tooltip"
            data-tip="Click - to delete"
            onClick={() => handleRemoveConditionClick(condition.condition)}
            icon="minus"
          />
        </div>
      ))}
    </div>
  );
};
export default CurrentConditions;
