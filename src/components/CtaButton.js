import React from 'react';
import { motion } from 'framer-motion';

function CtaButton({ buttonTitle, setPage, initialX, animateX }) {
  return (
    <motion.button
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          x: initialX,
        },
        animate: {
          opacity: 1,
          x: animateX,
        },
      }}
      transition={{ transition: 'easeOut', delay: 1.8, duration: 0.8 }}
      className="link"
      onClick={() => setPage(buttonTitle)}
    >
      {buttonTitle}
    </motion.button>
  );
}

export default CtaButton;
