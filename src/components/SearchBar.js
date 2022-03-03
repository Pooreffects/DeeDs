const SearchBar = ({ setSearchTerm, searchTerm, handleKeyPress }) => {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        value={searchTerm}
        placeholder="What are you trolling about?"
        required
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
