const RollToast = ({ name, roll }) => {
  return (
    <span className="bg-secondary-content text-neutral-content px-6 py-2 rounded-lg">
      {name} rolled: {roll}
    </span>
  );
};
export default RollToast;
