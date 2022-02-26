import React, { useState } from 'react';

// Notes & Todos
/* 
The recent activity:
- [x]  listening to the user's input and assigning it to the URL query
- [x]  Figure out a performant way to handle the search logic
- [x] Update the fetch query and the UI accordingly
- []  implement handleKeyPress() on button and empty the input value after fetch
- []  Extract the code base and props handling 
- []  Create some cool animation and better overall UX and UI Design; 
      * What's on my mind, when the app renders the content animates to the center, then
        - the user focuses the input, the container pops up and the backgrounds blurs,
        - the user clicks Search, the div slides up and the cards kinda like slide in animation

*/

function Gifs() {
  const [deeDs, setDeeDs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetchGifs() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&limit=24&q=${searchTerm}`
    );
    const result = await response.json();

    setDeeDs(result.data);
    console.log('called', deeDs);
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
        <input
          className="searchBar"
          type="text"
          value={searchTerm}
          placeholder="What are you trolling about?"
          required
          onChange={(event) => setSearchTerm(event.target.value)}
        />

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
  );
}

export default Gifs;
