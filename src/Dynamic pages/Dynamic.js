import React, { useEffect } from 'react';
import './Dynamic.css';
import { useParams } from 'react-router-dom';

function Dynamic({ Data, newstype }) {
  const { id } = useParams();
  const newsId = parseInt(id);
  const newsItem = Data.find((item) => item.id === newsId);

  useEffect(() => {
    window.scrollTo(0, -100);
  }, []);

  if (!newsItem) {

    return <div className='Notfound'>News not found.</div>;
  }else{

  return (
    <>
      <section>
        <div id="dash" className={newstype}></div>
        <div id="section" className={newstype}>
          <div id="sec">
            <div className='type'><h1 className={newstype}>{newstype}</h1></div>
            <div className="main-content">
              <h1 id="title">{newsItem.title}</h1>
              <p className="description">{newsItem.description}</p>
              <div className={newstype} id='place-time'>
                <h2 className="type">{newsItem.type}</h2>
                <h2 className="time">{newsItem.date}</h2>
              </div>
              <div className="imagebox">
                <img src={newsItem.image} id='image' alt="News" />
              </div>
              <div className="dec">
                <h1 className="by">News by Mr Smith</h1>
                {newsItem.paragraphs.map((paragraph, index) => (
                  <p key={index} className='paragraph'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );}
}

export default Dynamic;
