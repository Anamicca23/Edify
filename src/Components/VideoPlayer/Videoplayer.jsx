import React, { useRef } from 'react';
import './Videoplayer.css';
import video from '../../assets/college-video.mp4';


const Videoplayer = ({ PlayState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div className={`video-player ${PlayState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
      <button className="close-btn" onClick={() => setPlayState(false)}>X</button>
    </div>
  );
};

export default Videoplayer;
