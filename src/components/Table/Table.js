import React from 'react';
import useTable from './useTable';
const Table = () => {
  const { posts, currentPage, postsPerPage, getHeader, getRowsData } = useTable(
    login,
  );

  function login() {
    console.log(posts);
  }

  return (
    <div>
      <table className="table table-hover">
        <tr>{getHeader()}</tr>
        <tbody>{getRowsData()}</tbody>
      </table>
      <h1>
        Current Page: {currentPage} Records Per Page{postsPerPage}
      </h1>
    </div>
  );
};
export default Table;
