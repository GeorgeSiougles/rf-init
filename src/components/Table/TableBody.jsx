import TableRow from './TableRow';

const TableBody = ({ body }) => {
  return (
    <tbody>
      {body.map((character, index) => (
        <TableRow key={character.id} character={character} index={index} />
      ))}
    </tbody>
  );
};
export default TableBody;
