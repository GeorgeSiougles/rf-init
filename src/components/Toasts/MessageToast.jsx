const MessageToast = ({ message }) => {
  return (
    <span className="bg-secondary text-secondary-content px-6 py-2 rounded-lg my-2">
      {message}
    </span>
  );
};
export default MessageToast;
