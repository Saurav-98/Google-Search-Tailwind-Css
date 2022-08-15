import React, { useContext, createContext, useState } from 'react';

const ResultsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

const ResultContextProvider = ({ childen }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': '8ff376911bmsha39c35414c58b16p1f76a8jsn696ef1986445',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      },
    });

    const data = await response.json();
    console.log(data);
    setResults(data);
    isLoading(false);
  };

  return (
    <ResultsContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {childen}
    </ResultsContext.Provider>
  );
};

export const useGlobalResultContext = () => {
  return useContext(ResultsContext);
};
export default ResultContextProvider;
