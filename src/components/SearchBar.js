import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div >
      <input
        className="searchBar"
        type="text"
        key="random"
        placeholder="What are you trolling about?"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <h2 style={{ color: 'slateblue', fontSize: '1em' }}>{searchTerm}</h2>
    </div>
  );
}

export default SearchBar;
