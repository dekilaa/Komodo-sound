import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/dj.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Komodo sound tech </h1>
        <p> Sve je u redu jer petak je u sredu!</p>
        <Link to="/menu">
          <button> LIVE STREAM'S </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
