import React, { useState } from 'react';
import Trending from './Trending';
import SearchBar from './SearchBar';

// Notes & Todos
/* 
The recent activity:
- [x]  listening to the user's input and assigning it to the URL query
- [x]  Figure out a performant way to handle the search logic
- [x]  Update the fetch query and the UI accordingly
- [x]   First try of understanding default export VS just export FAILED! do some research
- [x]  Empty the input value after fetch 
- [x]  use react-query to fetch, add cache, and extand the application functionalities
- [x]  Extract the codebase and props handling 
- []   You know, underline the home buttons on hover or some shit
- []   Implement the download functionality with a down arrow from MUI
- []   Implement handleKeyPress() on button 
- []   Create some cool animation and better overall UX and UI Design; 
      * What's on my mind, when the app renders the content animates to the center, then
        - the user focuses the input, the container pops up and the backgrounds blurs,
        - the user clicks Search, the div slides up and the cards kinda like slide in animation

*/

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
        <button onClick={() => setPage('Search')}>Search</button>
        <button onClick={() => setPage('Trending')}>Trending</button>
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
                <div className="gif-card" key={GIF.id}>
                  <img className="gif" src={GIF.images.original.webp} alt="" />
                  <h4 className="gif-title">{GIF.title}</h4>
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
