import React from 'react';
import './World.css';
import WorldData from '../../Json/World.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function truncateText(text, maxWords) {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
}

function World() {

 

  return (
    <div className="sec world-section">
      <div className="world-intro hide-ani">
        <h1 className="world-intro-head">
          <span className="world-intro-box"></span> World <span className="world-intro-box"></span>
        </h1>
        <h3 className="world-small-intro">News from all over the globe</h3>
      </div>

      <div className="news-grid" >
        {WorldData.map((item, index) => (
            <Link key={item.id} to={`/news/World/${item.id}`}>
          <div className="news-card hidden card" key={index}>
            <div className="news-image">
              <img className="news-image-img" src={item.image} alt="" />
            </div>
            <div className="news-content">
              <h1 className="news-title">{truncateText(item.title, 12)}</h1>
              <p className="news-description">{truncateText(item.description, 30)}</p>
            </div>
            <div className="news-footer">
              <span className="news-country">{item.type}</span>
              <span className="news-date">{item.date}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
     
      <button className="more-news hidden">
      <Link 
      className='link'
      to={"/world"}>
        More World News <FontAwesomeIcon color="var(--color-blue)" icon={faAngleDoubleRight} /></Link>  
      </button>
      
    </div>
  );
}

export default World;




