import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ transition: 'easeOut', duration: 1 }}
      className="app-header"
    >
      <h2 className="heading">
        <h1>DeeDs</h1>
        <h4>The Hub for the internet trolls</h4>
      </h2>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ transition: 'easeOut', delay: 1, duration: 1 }}
        className="call-to-action-text"
      >
        <p>Pretty much the right place for goofy trolls like you and myself</p>
        <span>
          <p>Explore some fun GIFs! 😄</p>
        </span>
      </motion.div>
    </motion.header>
  );
}

export default Header;
