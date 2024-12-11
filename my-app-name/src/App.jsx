import { useState } from 'react'
import './App.css'
import FlipCard from './FlipCards'
import Podcast from './Podcast';
import ImageCarousel from './slideshow'; 


function App() {

  return (
    <div className="App">
      <h1 className = "title">Medium in the Message</h1>
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
      for expression influence how that society thinks as the short-form content that comes with social media or watching TV 
      leads to less care to learn more about current events because it doesn't allow for much context nor require engagement.
      </p>

      <div className="Podcast">
      <Podcast />
      </div>
      
      <img src ="/YouTubePersonalityStat.jpg" alt="YouTube Personality Stat" className="left-aligned"/>
      <p className="personalityStat">
      The biggest reason why people use YouTube, one of the biggest social media platforms, as a source for news was because of how they seek opinions from other people.
      A pew research study states, "Indeed, YouTube news viewers are about as likely to say they are primarily looking for opinions and commentary on the website (51%) as 
      they are to say they are mostly seeking information and facts (i.e., “straight” reporting; 48%).” This supports Postman's idea about how the medium affects the message 
      as he believes that "intellectual" and "serious" activities are taken over by the need for entertainment as people are using YouTube to be entertained through commentary
      on different current events. This is further shown by the fact that certain opinions will gain more viewership than others. The same study states,“Negativity also seemed 
      to drive viewership – or, on the other side of the coin, positivity was less effective at capturing an audience’s attention. Videos that were predominantly 
      negative in tone received an average of 184,000 views, somewhat higher than videos that had a mixed or neutral tone, which averaged 172,000 views. On the other hand, videos with a 
      positive tone received notably fewer views, with 117,000, on average. This pattern was reflected in videos that were produced by both types of channels – news organizations and 
      independent channels alike.” This indicates that YouTube consumers are looking for videos with a high amount of emotion, and negative videos evoke a lot of emotion which could 
      entertain the consumer. Emotions in a video about politics cause a person to lean towards or away from a certain opinion, and there is a lack of discourse due to how the consumer
      isn't able to argue with a video which leads to forming opinions without logically thinking about it.
      </p>

      <div>
        <h2 className = "carouselTitle">Statistics on YouTube News Videos</h2>
        <ImageCarousel />
      </div>

      <div className ="sources">
        <h2>Sources</h2>
        <p>
        Wang, Luxuan, and Naomi Forman-Katz. “Many Americans Find Value in Getting News on Social Media, but Concerns about Inaccuracy Have Risen.” 
        ew Research Center, 7 Feb. 2024, www.pewresearch.org/short-reads/2024/02/07/many-americans-find-value-in-getting-news-on-social-media-but-concerns-about-inaccuracy-have-risen/. <br />
        Stocking, Galen, et al. “Many Americans Get News on YouTube, Where News Organizations and Independent Producers Thrive Side by Side.” Pew Research Center’s Journalism Project, 
        28 Sept. 2020, www.pewresearch.org/journalism/2020/09/28/many-americans-get-news-on-youtube-where-news-organizations-and-independent-producers-thrive-side-by-side/. <br />
        “Social Media: Friend or Foe to the News Cycle? - News Literacy Initiative.” Psu.edu, 2016, newsliteracy.psu.edu/podcasts/episode-105-social-media-friend-or-foe-to-the-news-cycle. <br /> 
        Mitchell, Amy, et al. “Americans Who Mainly Get Their News on Social Media Are Less Engaged, Less Knowledgeable.” Pew Research Center’s Journalism Project, 
        Pew Research Center, 30 July 2020, www.pewresearch.org/journalism/2020/07/30/americans-who-mainly-get-their-news-on-social-media-are-less-engaged-less-knowledgeable/. 

        </p>
      </div>
    </div>
  );
}

export default App;
