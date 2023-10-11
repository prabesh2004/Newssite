import React, { useEffect, useState } from 'react';
import './Articles.css';
import articles from '../../Json/Articles.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
    <div className="sec article-section">
      <div className="Article-intro hide-ani">
        <h1 className="Article-intro-head">
          <span className="Article-intro-box"></span> Article <span className="Article-intro-box"></span>
        </h1>
        <h3 className="Article-small-intro">Best articles from our developers</h3>
      </div>
      <div className="article-container">
        {articles.map((article, index) => (
          <div className="article-card hidden" key={index}>
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
      <Link
      to={"/article"}
      className='link'
      >
      <button className="more-news articles hidden">
        More Articles <FontAwesomeIcon color="var(--color-blue)" icon={faAngleDoubleRight} />
      </button>
      </Link>
    </div>
  );
}

export default Articles;


