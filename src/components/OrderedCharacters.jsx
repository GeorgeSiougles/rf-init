import OrderedCharacter from './OrderedCharacter';

const OrderedCharacters = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Name</th>
            <th>Status Effects</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <OrderedCharacter />
          <OrderedCharacter />
          <OrderedCharacter />
          <OrderedCharacter />
          <OrderedCharacter />
          <OrderedCharacter />
        </tbody>
      </table>
    </div>
  );
};
export default OrderedCharacters;
