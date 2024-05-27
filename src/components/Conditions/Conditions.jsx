import AddConditionModal from './AddConditionModal';
import CurrentConditions from './CurrentConditions';

const Conditions = ({ conditions, id }) => {
  return (
    <>
      {/* <AddCondition id={id} /> */}
      <AddConditionModal id={id} />
      {conditions.length > 0 && (
        <CurrentConditions id={id} conditions={conditions} />
      )}
    </>
  );
};
export default Conditions;
