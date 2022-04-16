import { motion } from 'framer-motion';

const SearchBar = ({
  setSearchTerm,
  searchTerm,
  handleKeyPress,
  fetchGifs,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          y: 80,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ transition: 'easeOut', duration: 1 }}
      className="call-to-action"
    >
      <input
        className="searchBar"
        type="text"
        value={searchTerm}
        placeholder="What are you trolling about?"
        required
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn" onClick={fetchGifs}>
        Search
      </button>
    </motion.div>
  );
};

export default SearchBar;
