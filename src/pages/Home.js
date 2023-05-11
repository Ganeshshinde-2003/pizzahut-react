import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import BannerImage from "../assets/pizza.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>React's Pizzeria</h1>
        <p>Best pizza in town</p>
        <Link to="/menu">
          <button> ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
