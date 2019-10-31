import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
      }
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [callback, isFetching]);

 

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;