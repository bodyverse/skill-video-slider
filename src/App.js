import React, { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [sliderValue, setSliderValue] = useState(0);
  const [committedValue, setCommittedValue] = useState(0);
  const [currentVideo, setCurrentVideo] = useState('Compare_000.mp4');
  const [isPlaying, setIsPlaying] = useState(true);
  const [showOverview, setShowOverview] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!showOverview) {
      const padded = String(committedValue).padStart(3, '0');
      setCurrentVideo(`Compare_${padded}.mp4`);
    }
  }, [committedValue, showOverview]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMode = () => {
    if (!showOverview) {
      setCurrentVideo('Grid.mp4');
    } else {
      const padded = String(committedValue).padStart(3, '0');
      setCurrentVideo(`Compare_${padded}.mp4`);
    }
    setShowOverview(!showOverview);
    setIsPlaying(true);
  };

  const handleSliderChange = (e) => {
    const value = Math.round(e.target.value / 5) * 5;
    setSliderValue(value);
  };

  const commitSliderChange = () => {
    setCommittedValue(sliderValue);
    setIsDragging(false);
  };

  return (
    <div className="container">
      <div className="video-wrapper" onClick={togglePlay}>
        <video
          className="video-bg"
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          key={currentVideo}
        >
          <source src={`/videos/${currentVideo}`} type="video/mp4" />
        </video>

        {!showOverview && (
          <>
            <div className="overlay top-left">100%</div>
            <div className={`overlay top-right ${isDragging ? 'highlight' : ''}`}>
              {sliderValue}%
            </div>
          </>
        )}
      </div>

      <div className="controls">
        {!showOverview && (
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onMouseUp={commitSliderChange}
            onTouchEnd={commitSliderChange}
            className="slider"
          />
        )}
        <button onClick={toggleMode}>
          {showOverview ? 'Skill' : 'Overview'}
        </button>
      </div>
    </div>
  );
}

export default App;
