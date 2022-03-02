import React from 'react';
import { saveAs } from 'file-saver';
import DownloadIcon from '@mui/icons-material/Download';

export default function Download({ GIF }) {
  const saveGif = () => {
    saveAs(GIF.images.looping.mp4, GIF.title);
  };
  return (
    <>
      <button
        className="hvr-underline-from-left gif-download "
        onClick={saveGif}
      >
        <DownloadIcon fontSize="small" color="primary" />
        <h4>Download</h4>
      </button>
    </>
  );
}
