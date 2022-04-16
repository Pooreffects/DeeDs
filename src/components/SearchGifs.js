import React from 'react';
import { motion } from 'framer-motion';
import Download from './Download';

function SearchGifs({ GIF, i }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: i % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.2, delay: i * 0.3 }}
      className="hvr-float-shadow gif-card"
    >
      <img src={GIF.images.original.url} alt={GIF.title} className="gif" />
      <h4 className="gif-title">{GIF.title}</h4>
      <Download GIF={GIF} />
    </motion.div>
  );
}

export default SearchGifs;
