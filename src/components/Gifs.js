import React, { useState, Suspense } from 'react';
import Loading from './Loading';
import SearchBar from './SearchBar';
import CtaButton from './CtaButton';
import '../styles/link.scss';

const TrendingGifs = React.lazy(() => import('./TrendingGifs'));
const SearchGifs = React.lazy(() => import('./SearchGifs'));

function Gifs() {
  const [deeDs, setDeeDs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState();

  async function fetchGifs() {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&limit=36&q=${searchTerm}`;
    const response = await fetch(url);
    const result = await response.json();
    setDeeDs(result.data);
    setSearchTerm('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchGifs();
    }
  };

  console.log(deeDs);

  return (
    <>
      <div className="call-to-action">
        <div className="buttons">
          <CtaButton
            buttonTitle={'Trending'}
            setPage={setPage}
            initialX={-100}
            animateX={0}
          />
          <CtaButton
            buttonTitle={'Search'}
            setPage={setPage}
            initialX={100}
            animateX={0}
          />
        </div>
      </div>

      {page === 'Trending' && (
        <Suspense fallback={<Loading />}>
          <TrendingGifs />
        </Suspense>
      )}
      {page === 'Search' && (
        <>
          <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleKeyPress={handleKeyPress}
            fetchGifs={fetchGifs}
          />
          <div className="gifs-wrapper">
            <Suspense fallback={<Loading />}>
            {deeDs?.map((GIF, i) => (
                <SearchGifs key={GIF.id} GIF={GIF} i={i} />
              </Suspense>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Gifs;
