import React from 'react';
import useTable from './useTable';
const Table = () => {
  const {
    posts,
    currentPage,
    postsPerPage,
    students,
    getHeader,
    getRowsData,
    renderTableData,
  } = useTable(login);

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
      <h1>
        Current Page: {currentPage} Records Per Page{postsPerPage}
      </h1>
    </div>
  );
};
export default Table;
