const TableHeader = ({ titles }) => {
  return (
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHeader;
