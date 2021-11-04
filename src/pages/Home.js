import React,{useState} from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/dj.jpg";
import "../styles/Home.css";
import AudioPlayer from 'react-h5-audio-player'

function Home() {
  
const [click, setState] = useState(false)
  function handleClick() {
    setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

console.log(click);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 onClick={handleClick}> Komodo sound tech </h1>
        <p> Sve je u redu jer petak je u sredu!</p>
        <Link to="/menu">
          <button> LIVE STREAM'S </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
