import AddCondition from './AddCondition';
import CurrentConditions from './CurrentConditions';

const Conditions = ({ conditions, id }) => {
  return (
    <>
      <AddCondition id={id} />
      {conditions.length > 0 && (
        <CurrentConditions id={id} conditions={conditions} />
      )}
    </>
  );
};
export default Conditions;
