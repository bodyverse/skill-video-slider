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
          className={`video-bg ${showOverview ? 'all-bodies' : ''}`}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          key={currentVideo}
        >
          <source src={`${process.env.PUBLIC_URL}/videos/${currentVideo}`} type="video/mp4" />
        </video>

        {!showOverview && (
          <>
            <div className="overlay-text top-left">100%</div>
            <div className={`overlay-text top-right ${isDragging ? 'highlight' : ''}`}>
              {sliderValue}%
            </div>
          </>
        )}
      </div>

      <div className="controls">
        {!showOverview && (
          <div className="slider-wrapper">
            <div className="overlay-text move-name-pos">Locking_01</div>
            <div
              className="slider-tooltip"
              style={{ left: `${sliderValue + (4 * ((sliderValue - 50) / -100))}%` }}
            >
              {sliderValue}%
            </div>
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
              style={{ '--percent': `${sliderValue}%` }}
            />
            <button className="btn-all-bodies-pos" onClick={toggleMode}>All the Bodies</button>
          </div>
        )}

        {showOverview && (
          <button onClick={toggleMode}>Slider</button>
        )}
      </div>
    </div>
  );
}

export default App;
