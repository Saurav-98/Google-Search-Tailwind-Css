import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useGlobalResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } =
    useGlobalResultContext();

  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }
  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return 'SEARCH';

    default:
      return 'ERROR!';
  }
};

export default Results;
