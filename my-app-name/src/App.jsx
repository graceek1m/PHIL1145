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
          things such as clickbait or the coverage not being in-depth enough. This shows that social media leads to people getting vague information about
          current events or completely wrong information, leading to people not being able to talk in-depth about current events." 
        />
        <FlipCard 
          imageSrc="https://www.pewresearch.org/wp-content/uploads/sites/20/2020/07/PJ_2020.07.30_social-media-news_00-03.png" 
          backContent="The amount of high political knowledge shown in the news website or app and print, which both are textual mediums, is higher than more interactive
          and visual content such as social media and all forms of TV. This illustrates that social media and visual content are less in-depth than textual content, 
          leading to people being less educated on current events because the political knowledge being shown is not in-depth enough to be fully educated on a current event." 
        />
      </div>

      <p>
      A Pew Research study found that people who are less likely to be aware of political events such as the 2020 election are people who
      use social media and local TV as their primary sources of political news. The study states, "The only group with a level of engagement 
      that is similarly low is U.S. adults who get their political news primarily from local television, 11% of whom are following election news 
      very closely. This is a common thread throughout the analysis: The social media group and the local TV group are often comparable in their 
      lower levels of engagement with and knowledge of the news." This reveals that there is a correlation between the type of media a person 
      consumes and how educated they are on current events and how much they care about them as this was not only a pattern in political events,
      but also in general current events as well such as the coronavirus. 23% of U.S. adults who get their political news from social media and 32% of
      adults who get their political news from local TV were following what was happening during the COVID-19 pandemic compared to other groups such as 
      news websites and apps where 44% of U.S. adults were following what was happening. This suppots Neil Postman's idea that a society's dominant medium 
      for expression influence how that society thinks as the lack of interactiveness and the short-form content that comes with social media or watching TV 
      leads to less care to learn more about current events.
      </p>
      <div className="Podcast">
      <Podcast />
      </div>

    </div>
  );
}

export default App;
