const ConditionDrawer = ({ condition, duration, description }) => {
  return (
    // ID of the drawer can identify the drawer
    <div className="drawer ">
      <input id={`${condition}`} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor={`${condition}`} className="badge">
          {condition} : {duration}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={`${condition}`}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <a>{description}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ConditionDrawer;
