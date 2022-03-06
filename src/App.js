import Gifs from './components/Gifs';
import { QueryClient, QueryClientProvider } from 'react-query';
import { motion, AnimatePresence } from 'framer-motion';

const queryClient = new QueryClient();

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

function App() {
  return (
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <motion.header
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ transition: 'easeOut', duration: 1 }}
            className="app-header"
          >
            <h2 className="heading">
              <span>DeeDs</span>
              The Hub for the internet trolls
            </h2>
          </motion.header>
          <Gifs />
        </div>
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default App;
