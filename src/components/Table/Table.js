import React from 'react';
import useTable from './useTable';
import '../../css/bootstrap.min.css';
import Pagination from '../Pagination/Pagination';
const Table = (props) => {
  const {
    posts,
    currentPosts,
    currentPage,
    postsPerPage,
    paginate,
  } = useTable();

  const RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return <td key={props.data[key]}>{props.data[key]}</td>;
    });
  };

  function getRowsData() {
    var keys = getKeys();
    return currentPosts.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  }
  function getKeys() {
    return Object.keys(posts[0]);
  }
  function getHeader() {
    var keys = getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    }); /// Prints all Keys...
  }
  const paginatePosts = (pageNumber) => {
    // setCurrentpage(currentPage)
    alert(pageNumber);
  };
  return (
    <div>
      <table className="table table-hover">
        <tr>{getHeader()}</tr>
        <tbody>{getRowsData()}</tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginatePosts}
        {...props}
      />
    </div>
  );
};
export default Table;
