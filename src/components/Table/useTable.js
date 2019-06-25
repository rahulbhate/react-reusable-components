import { useState } from 'react';
import React from 'react';
const useTable = (callback) => {
  const [students, setstudents] = useState([
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
  ]);

  function sortByTableHeadings() {
    alert('sort');
  }
  function renderTableData() {
    const myData = Object.keys(students[0]).map((d, i) => {
      const sData = students.map((student, j) => {
        return <div>{student[d]}</div>;
      });
      return sData;
    });

    return Object.keys(students[0]).map((key, index) => {
      return <td key={key}>{myData[index]}</td>;
    });
  }

  function renderHeader() {
    return Object.keys(students[0]).map((value) => {
      return (
        <th>
          <a style={{ cursor: 'pointer' }} href onClick={sortByTableHeadings}>
            {value.toUpperCase()}
          </a>
        </th>
      );
    }); /// Prints all Keys...
  }

  return {
    renderTableData,
    renderHeader,
    students,
  };
};
export default useTable;
