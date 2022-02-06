import React from 'react';
import Hero from '../img/hero.jpg';
import '../App.css';

export default function home() {
  return(
    <div className="container-hero">
      <div className="home-hero relative overflow-hidden  shadow-lg cursor-pointer w-full h-2/6 ">
        <img alt="hero" src={Hero} className="object-cover h-2/6 w-full "/>
        <div class="absolute top-0  px-40 py-60">
          <h1 class="mb-3 text-5xl  tracking-tight text-white">WELCOME TO HELL</h1>
        </div>
      </div>
    </div>
  )
}
