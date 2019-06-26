import React from 'react';
import usePagination from './usePaginaion';

const Pagination = () => {
  const {} = usePagination(page);
  function page() {
    console.log('Hello');
  }
  return <div>Pagination Component</div>;
};
export default Pagination;
