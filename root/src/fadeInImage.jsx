import React from 'react';
import './fadeInImage.css';

const ConspiracyCard = () => {
  return (
    <div className="conspiracy">
      <img src="/ConspiracyStat.png" alt="Conspiracy Stat" className="conspiracyImage" />
      <div className="overlay">
        <div className="conspiracyText">Social Media as a main source of news compared to textual content like print leads to being 
          more likely to be exposed to conspiracy theories. This correlates with Postman's idea that once the medium is heavily involved 
          with culture, the incoherence and disorder becomes a norm. The visual and short-form content of social media and TV makes it 
          a lot easier to be exposed to conspiracy theories, leading to more misinformation. Postman's idea that people would rather hear
          something interesting with little to no context compared to logical news that is longer form to explain all of the details is 
          heavily shown through how conspiracies spread through social media a lot faster than a textual medium.
        </div>
      </div>
    </div>
  );
};

export default ConspiracyCard;
