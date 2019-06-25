import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const useTable = (callback) => {
  const [students, setstudents] = useState([
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
    },
    {
      id: 4,
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
    },
    {
      id: 5,
      email: 'charles.morris@reqres.in',
      first_name: 'Charles',
      last_name: 'Morris',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
    },
    {
      id: 6,
      email: 'tracey.ramos@reqres.in',
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
    },
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg',
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Tobias',
      last_name: 'Funke',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg',
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg',
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg',
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg',
    },
  ]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  console.log(posts);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  function sortByTableHeadings() {
    alert('sort');
  }
  function renderTableData() {
    var keys = getKeys();
    return keys.map((key, index) => {
      return <td key={students[key]}>{students[key]}</td>;
    });
    /* const myData = Object.keys(students[0]).map((d, i) => {
      const sData = students.map((student, j) => {
        return <div>{student[d]}</div>;
      });
      return sData;
    });

    return Object.keys(students[0]).map((key, index) => {
      return <td key={key}>{myData[index]}</td>;
    });*/
  }
  const RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return <td key={props.data[key]}>{props.data[key]}</td>;
    });
  };

  function getRowsData() {
    var keys = getKeys();
    return students.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  }
  function getKeys() {
    return Object.keys(students[0]);
  }
  function getHeader() {
    var keys = getKeys();
    return keys.map((key, index) => {
      return (
        <th key={key}>
          <a style={{ cursor: 'pointer' }} href onClick={sortByTableHeadings}>
            {key.toUpperCase()}
          </a>
        </th>
      );
    }); /// Prints all Keys...
  }

  return {
    renderTableData,
    getHeader,
    getRowsData,
    students,
  };
};
export default useTable;
