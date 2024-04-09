const OrderedCharacter = ({ character }) => {
  return (
    <tr>
      <th>{character?.position || 1}</th>
      <td>{character?.name || 'Char Name'}</td>
      <td>{character?.status || 'Prone Grappled 2 rounds left'}</td>
      <td>
        <button>Remove</button>
      </td>
    </tr>
  );
};
export default OrderedCharacter;
