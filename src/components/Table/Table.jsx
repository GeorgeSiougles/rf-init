import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ headerStyle, bodyData }) => {
  let tableHeaders = [];
  switch (headerStyle) {
    case 'dnd':
      tableHeaders = [
        'Initiative',
        'Name',
        'Player or NPC',
        'Conditions',
        'Remove',
      ];
      break;
  }

  return (
    <table className="table">
      <TableHeader titles={tableHeaders} />
      <TableBody body={bodyData} />
    </table>
  );
};
export default Table;
