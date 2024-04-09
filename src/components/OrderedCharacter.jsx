const OrderedCharacter = ({ character }) => {
  return (
    <tr>
      <th>{character?.position || 1}</th>
      <td>{character?.player || 'Player'}</td>
      <td>{character?.name || 'Char Name'}</td>
      <td>
        {character?.status || 'Prone 3 rounds left,Grappled 2 rounds left'}
      </td>
      <td>
        <button>Click to remove</button>
      </td>
    </tr>
  );
};
export default OrderedCharacter;
