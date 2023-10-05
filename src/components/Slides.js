import React, { useState } from 'react';

function Slides({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const restartSlideShow = () => {
    setCurrentSlideIndex(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={restartSlideShow}
          disabled={currentSlideIndex === 0}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlideIndex === 0}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === slides.length - 1}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlideIndex].title}</h1>
        <p data-testid="text">{slides[currentSlideIndex].text}</p>
      </div>
    </div>
  );
}

export default Slides;
