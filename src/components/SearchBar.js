const SearchBar = ({ setSearchTerm, searchTerm }) => {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        value={searchTerm}
        placeholder="What are you trolling about?"
        required
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
