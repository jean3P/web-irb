import React from "react";
import {Button} from "./Button";
import './HeroSection.css'
import '../App.css'
import video from "../resources/videos/turning_pages_bible.mp4"

function HeroSection() {
  return (
    <div className={'hero-container'}>
        <video autoPlay loop muted playsInline>
          <source src={video} type={"video/mp4"}/>
        </video>

      <h1>Expository study of Scripture</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Coffee & Word</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
          Sermons<i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;