import React from 'react';
import '../styles/loading.scss';

function Loading() {
  return (
    <div className="loading-container container">
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
    </div>
  );
}

export default Loading;
