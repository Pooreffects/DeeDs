import React, { useState } from 'react';
import Trending from './Trending';
import SearchBar from './SearchBar';
import '../styles/link.scss';
import Download from './Download';

function Gifs() {
  const [deeDs, setDeeDs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState();

  async function fetchGifs() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&limit=24&q=${searchTerm}`
    );
    const result = await response.json();

    setDeeDs(result.data);
    setSearchTerm('');
  }

  return (
    <>
      <div className="call-to-action-text">
        <p>
          Pretty much the right place for goofy trolls like you and I <br />
        </p>
        <span>
          <p>Explore some fun GIFs! 😄</p>
        </span>
      </div>
      <div className="call-to-action">
        <div className="btn">
          <button className="link" onClick={() => setPage('Trending')}>
            Trending
          </button>
          <button className="link" onClick={() => setPage('Search')}>
            Search
          </button>
        </div>
      </div>
      {page === 'Trending' && <Trending />}
      {page === 'Search' && (
        <>
          <div className="call-to-action">
            <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <button onClick={fetchGifs}>Search</button>
          </div>
          <div className="gifs-wrapper">
            {deeDs.map((GIF) => {
              return (
                <div className="hvr-float-shadow gif-card" key={GIF.id}>
                  <img className="gif" src={GIF.images.original.url} alt="" />
                  <h4 className="gif-title">{GIF.title}</h4>
                  <Download GIF={GIF} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Gifs;
