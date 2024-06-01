import { useDispatch } from 'react-redux';
import { removeCondition } from '../../store/charactersSlice';
import ConditionDrawer from './ConditionDrawer';
import Button from '../Button';
import toast from 'react-hot-toast';
import MessageToast from '../Toasts/MessageToast';

const CurrentConditions = ({ id, conditions }) => {
  const dispatch = useDispatch();
  const handleRemoveConditionClick = (condition) => {
    dispatch(removeCondition({ characterId: id, conditionName: condition }));
    toast.custom(
      <div className="flex flex-col">
        <MessageToast message={`${condition} has been removed!`} />
      </div>
    );
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
