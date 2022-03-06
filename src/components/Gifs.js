import React, { useState } from 'react';
import Trending from './Trending';
import SearchBar from './SearchBar';
import '../styles/link.scss';
import Download from './Download';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

function Gifs() {
  const [deeDs, setDeeDs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState();

  // Fetch data using fetch API, maybe convert it to react-query later

  async function fetchGifs() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&limit=24&q=${searchTerm}`
    );
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
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ transition: 'easeOut', delay: 1, duration: 1 }}
        className="call-to-action-text"
      >
        <p>
          Pretty much the right place for goofy trolls like you and I <br />
        </p>
        <span>
          <p>Explore some fun GIFs! 😄</p>
        </span>
      </motion.div>
      <div className="call-to-action">
        <div className="btn">
          <motion.button
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
                x: -100,
              },
              animate: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ transition: 'easeOut', delay: 1.8, duration: 0.8 }}
            className="link"
            onClick={() => setPage('Trending')}
          >
            Trending
          </motion.button>
          <motion.button
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
                x: 100,
              },
              animate: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ transition: 'easeOut', delay: 1.8, duration: 0.8 }}
            className="link"
            onClick={() => setPage('Search')}
          >
            Search
          </motion.button>
        </div>
      </div>
      {page === 'Trending' && <Trending />}
      {page === 'Search' && (
        <>
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
            <SearchBar
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              handleKeyPress={handleKeyPress}
            />
            <button onClick={fetchGifs}>Search</button>
          </motion.div>
          <div className="gifs-wrapper">
            {deeDs.map((GIF) => {
              return (
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 50,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                    },
                    exit: {
                      opacity: 0,
                      y: -50,
                    },
                  }}
                  transition={{ transition: 'ease', duration: 0.8 }}
                  className="hvr-float-shadow gif-card"
                  key={GIF.id}
                >
                  <img className="gif" src={GIF.images.original.url} alt="" />
                  <h4 className="gif-title">{GIF.title}</h4>
                  <Download GIF={GIF} />
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Gifs;
