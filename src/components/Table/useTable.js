import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const useTable = (callback) => {
  const [posts, setPosts] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  console.log(posts);
  console.log(Object.keys(posts[0]));
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  function renderTableData() {
    var keys = getKeys();
    return keys.map((key, index) => {
      return <td key={posts[key]}>{posts[key]}</td>;
    });
  }
  const RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return <td key={props.data[key]}>{props.data[key]}</td>;
    });
  };

  function getRowsData() {
    var keys = getKeys();
    return posts.map((row, index) => {
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

  return {
    renderTableData,
    getHeader,
    getRowsData,
    posts,
    currentPage,
    postsPerPage,
  };
};
export default useTable;
