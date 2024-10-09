import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 
import img1 from '../images/img1.jpg'; 
function Home() {
  return (
    <div className="home">
      <h1>Explore Ethiopia</h1>
      <p>Discover the diverse landscapes and rich cultural heritage of Ethiopia.</p>
      <img src={img1} alt="Ethiopian landscape" className="home-image" />
      <Link to="/about">
        <br/>
        <button className="learn-more">Learn More</button>
      </Link>
    </div>
  );
}

export default Home;
