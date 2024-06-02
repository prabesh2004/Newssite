import React from 'react';
import './Sports.css';
import SportData from '../../Json/Sports.json';
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
function Sports() {
  return (
    <div className="sec sport-section">
      <div className="sport-intro hide-ani">
        <h1 className="sport-intro-head">
          <span className="sport-intro-box"></span> Sport <span className="sport-intro-box"></span>
        </h1>
        <h3 className="sport-small-intro">News from all over the sport area</h3>
      </div>

      <div className="news-grid">
        {SportData.map((item, index) => (
           <Link key={item.id} to={`/news/Sports/${item.id}`}>
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
      <Link to={"/sport"} className='link'>
      <button className="more-news hidden">More Sport News   <FontAwesomeIcon  color='var(--color-purple)' icon={faAngleDoubleRight} />  </button>
      </Link>
    </div>
  );
}

export default Sports;
