import React, { useState } from 'react';
import useTable from './useTable';
const Table = () => {
  const { students, renderHeader, renderTableData } = useTable(login);

  function login() {
    console.log(students);
  }

  return (
    <div>
      <table className="table">
        <tr>{renderHeader()}</tr>
        <tr>{renderTableData()}</tr>
      </table>
    </div>
  );
};
export default Table;
