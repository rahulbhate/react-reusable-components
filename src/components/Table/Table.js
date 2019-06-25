import React from 'react';
import useTable from './useTable';
const Table = () => {
  const { students, getHeader, getRowsData, renderTableData } = useTable(login);

  function login() {
    console.log(students);
  }

  return (
    <div>
      <table className="table">
        <tr>{getHeader()}</tr>
        <tr>{renderTableData()}</tr>
        <tbody>{getRowsData()}</tbody>
      </table>
    </div>
  );
};
export default Table;
