import Gifs from './components/Gifs';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="app-header">
          <h2 className="heading">
            <span>DeeDs</span>
            The Hub for the internet trolls
          </h2>
        </header>
        <Gifs />
      </div>
    </QueryClientProvider>
  );
}

export default App;
