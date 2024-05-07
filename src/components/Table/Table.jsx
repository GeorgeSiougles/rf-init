import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ headerStyle, bodyData }) => {
  let tableHeaders = [];

  if (headerStyle === 'dnd') {
    tableHeaders = [
      'Total Initiative',
      'Name',
      'Player or NPC',
      'Conditions',
      'Remove',
    ];
  }

  return (
    <table className="table">
      <TableHeader titles={tableHeaders} />
      <TableBody body={bodyData} />
    </table>
  );
};
export default Table;
