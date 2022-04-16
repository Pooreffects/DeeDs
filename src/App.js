import Gifs from './components/Gifs';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Header />
          <Gifs />
        </div>
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default App;
