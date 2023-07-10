import React, { useState, useEffect } from 'react';
import "./Landing.css"
import Landingdata from "./Landing.json";

function Landing() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [places, setPlaces] = useState(Landingdata);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    setCurrentDay(`${dayOfWeek}`);
    setCurrentDate(`${day} ${month}, ${year}`);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaces((prevPlaces) => {
        return prevPlaces.map((place, index) => {
          const nextImageIndex = (place.currentImageIndex + 1) % place.image.length;
          const nextImageDelay = (index * 2 + 1) * 3000; // Delay in milliseconds
          setTimeout(() => {
            setPlaces((prevPlaces) => {
              const updatedPlaces = [...prevPlaces];
              updatedPlaces[index].currentImageIndex = nextImageIndex;
              return updatedPlaces;
            });
          }, nextImageDelay);
          return place;
        });
      });
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const truncateDescription = (description) => {
    if (description) {
      const words = description.split(' ');
      if (words.length > 45) {
        return words.slice(0, 45).join(' ') + '...';
      }
      return description;
    }
    return '';
  };
  const truncatetitle = (title) => {
    if (title) {
      const words = title.split(' ');
      if (words.length > 15) {
        return words.slice(0, 15).join(' ') + '..';
      }
      return title;
    }
    return '';
  };

  return (
    <div className='sec'>
      <h1 className="welcome">Welcome to Sky-News</h1>
      <div className="headline">
        <div className="datetime">
          <h2 className="day">{currentDay}</h2>
          <h2 className="date">{currentDate}</h2>
        </div>
        <div className="pallet">
          {places.map((place, index) => (
            <div key={index} className={`${index === 0 ? 'bighead' : 'smallhead'} ${index % 2 === 1 ? 'oddclass' : ''} hidden card`}>
              {place.image.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className={`imgb ${place.currentImageIndex === imageIndex ? 'active' : ''}`}
                  src={`images/${image}`}
                  alt=""
                />
              ))}
              <div className="palletcontent">
                <div className="palletnews">
                  <h3 className='newstitle'>{truncatetitle(place.title)}</h3>
                  <p className="newsdescription">{truncateDescription(place.description)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;