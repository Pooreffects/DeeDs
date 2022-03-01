import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';

const fetchTrending = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=24&q`
  );
  return response.json();
};

function Trending() {
  const { data, status } = useQuery('trending', fetchTrending);
  return (
    <div>
      {status === 'loading' && <Loading />}
      {status === 'error' && <div>Error fetching data!</div>}
      {status === 'success' && (
        <div className="gifs-wrapper">
          {data.data.map((trendingGif) => {
            return (
              <div className="gif-card" key={trendingGif.id}>
                <img
                  className="gif"
                  src={trendingGif.images.original.webp}
                  alt=""
                />
                <h4 className="gif-title">{trendingGif.title}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Trending;
