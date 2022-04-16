import React, { useState } from 'react';
import TrendingGifs from './TrendingGifs';
import SearchBar from './SearchBar';
import SearchGifs from './SearchGifs';
import CtaButton from './CtaButton';
import '../styles/link.scss';

function Gifs() {
  const [deeDs, setDeeDs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState();

  async function fetchGifs() {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&limit=36&q=${searchTerm}`;
    const response = await fetch(url);
    const result = await response.json();
    setDeeDs(result.data);
    setSearchTerm('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchGifs();
    }
  };

  return (
    <>
      <div className="buttons">
        <CtaButton
          buttonTitle={'Trending'}
          setPage={setPage}
          initialX={-100}
          animateX={100}
        />
        <CtaButton
          buttonTitle={'Search'}
          setPage={setPage}
          initialX={100}
          animateX={0}
        />
      </div>

      {page === 'Trending' && <TrendingGifs />}
      {page === 'Search' && (
        <>
          <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleKeyPress={handleKeyPress}
            fetchGifs={fetchGifs}
          />
          <div className="gifs-wrapper">
            {deeDs.map((GIF, i) => (
              <SearchGifs key={GIF.id} i={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Gifs;
