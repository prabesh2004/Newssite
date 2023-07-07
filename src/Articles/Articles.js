import React, { useEffect, useState } from 'react';
import './Articles.css';
import articles from './Articles.json';

function truncateText(text, limit) {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
}

function Articles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Set initial mobile state
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="sec section">
      <div className="Article-intro">
        <h1 className="Article-intro-head">
          <span className="Article-intro-box"></span> Article <span className="sport-intro-box"></span>
        </h1>
        <h3 className="Article-small-intro">Best articles from our developers</h3>
      </div>
      <div className="article-container">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <div className="article-content">
              <h1 className="article-title">{truncateText(article.title, 12)}</h1>
              <p className="article-dec">
                {isMobile
                  ? truncateText(article.description, 20)
                  : truncateText(article.description,50)}
              </p>
            </div>
            <div className="article-footer">
              <div className="article-date">{article.date}</div>
              <div className="article-photo">
                <span className="author-name">{article.author}</span>
                <img src={article.image} alt="" className="article-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;


