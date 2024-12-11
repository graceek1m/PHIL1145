import { useState } from 'react'
import './App.css'
import FlipCard from './FlipCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Medium in the Message</h1>
      <h3>How the type of media a person consumes affects how they view current events</h3>
      <div className="card-container">
        <FlipCard 
          imageSrc="https://www.pewresearch.org/wp-content/uploads/sites/20/2024/02/SR_24.02.07_social-media-news_1.png" 
          backContent="Back Content 1" 
        />
        <FlipCard 
          imageSrc="https://www.pewresearch.org/wp-content/uploads/sites/20/2024/02/SR_24.02.07_social-media-news_2.png" 
          backContent="Back Content 2" 
        />
        <FlipCard 
          imageSrc="https://www.pewresearch.org/wp-content/uploads/sites/20/2024/02/SR_24.02.07_social-media-news_3.png" 
          backContent="Back Content 3" 
        />
      </div>
    </div>
  );
}

export default App;
