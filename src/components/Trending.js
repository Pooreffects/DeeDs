import React from 'react';
import { useQuery } from 'react-query';
import Download from './Download';
import Loading from './Loading';
import { motion } from 'framer-motion';

const fetchTrending = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=36&q`
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
          {data.data.map((GIF, i) => {
            return (
              <motion.div
                key={GIF.id}
                initial={{
                  opacity: 0,
                  translateX: i % 2 === 0 ? -50 : 50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.2, delay: i * 0.3 }}
                className="gif-card"
              >
                <img
                  src={GIF.images.original.webp}
                  alt={GIF.title}
                  className="gif"
                />
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
