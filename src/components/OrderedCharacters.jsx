import OrderedCharacter from './OrderedCharacter';

const OrderedCharacters = ({ characters }) => {
  console.log(characters);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Player or NPC </th>
            <th>Name</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <OrderedCharacter key={character.id} character={character} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderedCharacters;
