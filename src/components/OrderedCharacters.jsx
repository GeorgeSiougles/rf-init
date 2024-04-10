import OrderedCharacter from './OrderedCharacter';

const OrderedCharacters = ({ characters }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Total Initiative</th>
            <th>Name</th>
            <th>Player or NPC </th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <OrderedCharacter
              key={character.id}
              character={character}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderedCharacters;
