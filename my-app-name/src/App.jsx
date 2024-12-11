import { useState } from 'react'
import './App.css'
import FlipCard from './FlipCards'
import Podcast from './Podcast';

function App() {

  return (
    <div className="App">
      <h1>Medium in the Message</h1>
      <h3>How the type of media a person consumes affects how they view current events</h3>
      <p> Thesis: More modern mediums such as TV and social media are more commonly used, 
        but go less in-depth than traditional mediums such as the news, leading to more surface-level discourse.
      </p>

      <div className="card-container">
        <FlipCard 
          imageSrc="https://www.pewresearch.org/wp-content/uploads/sites/20/2024/02/SR_24.02.07_social-media-news_1.png" 
          backContent="Back Content 1" 
        />
        <FlipCard 
          imageSrc="https://www.pewresearch.org/wp-content/uploads/sites/20/2024/02/SR_24.02.07_social-media-news_2.png" 
          backContent="The biggest issues with getting news from social media seem to be that it's inaccurate and low-quality, which was defined as
          things such as clickbait or the coverage not being in-depth enough. This illustrates that social media leads to people getting vague information about
          current events or completely wrong information, leading to people not being able to talk in-depth about current events." 
        />
        <FlipCard 
          imageSrc="https://www.pewresearch.org/wp-content/uploads/sites/20/2020/07/PJ_2020.07.30_social-media-news_00-03.png" 
          backContent="The amount of high political knowledge shown in the news website or app and print, which both are textual mediums, is higher than more interactive
          and visual content such as social media and all forms of TV. " 
        />
      </div>

      <div className="Podcast">
      <Podcast />
      </div>

    </div>
  );
}

export default App;
