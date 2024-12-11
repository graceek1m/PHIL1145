import React from "react";
import './FlipCards.css';

const FlipCard = ({ imageSrc, backContent }) => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front of the card displays an image */}
          <div className="flip-card-front">
            <img src={imageSrc} alt="Card Front" className="flip-card-image" />
          </div>
          {/* Back of the card displays text or other content */}
          <div className="flip-card-back">{backContent}</div>
        </div>
      </div>
    );
  };

export default FlipCard;
