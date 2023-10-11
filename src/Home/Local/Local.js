import React from 'react';
import './Local.css';
import LocalData from '../../Json/Local.json';
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

function Local() {
  return (
    <div className="sec local-section">
      <div className="local-intro hide-ani">
        <h1 className="local-intro-head">
          <span className="local-intro-box"></span> Local <span className="local-intro-box"></span>
        </h1>
        <h3 className="local-small-intro">News from all over the local area</h3>
      </div>

      <div className="news-grid">
        {LocalData.map((item, index) => (
          <Link key={item.id} to={`/news/Local/${item.id}`} >
          <div className="localnews-card hidden card" key={index}>
          
            <div className="news-image ">
              <img className="news-image-img" src={item.image} alt="News image" />
            </div>  
            <div className="news-content">
              <h1 className="news-title">{truncateText(item.title, 12)}</h1>
              <p className="news-description">{truncateText(item.description, 30)}</p>
            </div>
            <div className="news-footer">
              <span className="localnews-place">{item.type}</span>
              <span className="news-date">{item.date}</span>
             
            </div>
            
          </div>
          </Link>
        ))}
       
      </div>
      <Link  to={"/local"} className='link'>
      <button className="more-news hidden">More Local News   <FontAwesomeIcon color='var(--color-red)' icon={faAngleDoubleRight} />  </button>
      </Link>
    </div>
    
  );
}

export default Local;
