import React from 'react';
import { useQuery } from 'react-query';
import Download from './Download';
import Loading from './Loading';
import { motion } from 'framer-motion';

const fetchTrending = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=24&q`
  );
  return response.json();
};

function Trending() {
  // Fetch data using react-query
  const { data, status } = useQuery('trending', fetchTrending);

  return (
    <div>
      {status === 'loading' && <Loading />}
      {status === 'error' && <div>Error fetching data!</div>}
      {status === 'success' && (
        <div className="gifs-wrapper">
          {data.data.map((GIF) => {
            return (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 100,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                  exit: {
                    opacity: 0,
                    y: -100,
                  },
                }}
                transition={{ transition: 'ease', duration: 0.8 }}
                className="gif-card"
                key={GIF.id}
              >
                <img className="gif" src={GIF.images.original.webp} alt="" />
                <h4 className="gif-title">{GIF.title}</h4>
                <Download GIF={GIF} />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Trending;
