import React from 'react'
import "./World.css"

function World() {
  return (
   <div className="sec">
    <div className="intro">
       
        <h1 className='intro-head'> <div className="box"></div> World  <div className="box"></div></h1>
       <h3 className='smallintro'>News from all over the globe</h3>
    </div>
    <div className="news-section">
      <div className="news-box">

        <div className="img-box"></div>
        <div className="content-box">
            <h1 className="title"></h1>
            <p className="description"></p>
            <div className="bottom-content">
                <h3 className="country"></h3>
                <h3 className="date"></h3>
            </div>

        </div>
      </div>
      <div className="news-box">

      <div className="img-box"></div>
        <div className="content-box">
            <h1 className="title"></h1>
            <p className="description"></p>
            <div className="bottom-content">
                <h3 className="country"></h3>
                <h3 className="date"></h3>
            </div>
        </div>

      </div>
      <div className="news-box">

      <div className="img-box"></div>
        <div className="content-box">
            <h1 className="title-box">Dazzling ancient bronze sword found in Germany</h1>
            <p className="description-box">
            German archaeologists are thrilled to have dug up a Bronze Age sword more than 3,000 years old which is extraordinarily well preserved.
            </p>
            <div className="bottom-content">
                <h3 className="country">USA</h3>
                <h3 className="date">2 may, 2023</h3>
            </div>
        </div>


      </div>
    </div>
   </div>
  )
}

export default World