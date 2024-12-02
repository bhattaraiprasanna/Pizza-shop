import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/backgroundimage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'
        style={{ backgroundImage: `url(${BannerImage})` }}>
      <div 
        className='headerContainer' 
      >
        <h1>Prasanna's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <button>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default Home;

