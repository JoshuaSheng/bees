import React, { Component } from 'react';
import ParticlesBg from "particles-bg";
import icon from "./icon";
import "./style.css";

class Header extends Component {
   
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
      const particles = this.getBgParticles();
      return <React.Fragment>{particles}</React.Fragment>;
    }

    let config = {
      num: [4, 7],
      rps: 0.4,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      body: icon, // Whether to render pictures
       //rotate: [0, 20],
      alpha: [0.8, 0],
      scale: [1, 0.1],
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      //color: ["#fff826"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 0,    // gravity
    };

    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>
      
      <div className="row banner">
         <div className="banner-text">
         <ParticlesBg type="custom" config={config} bg={"https://www.pikpng.com/pngl/b/587-5874860_-pink-daisy-flower-clipart-views-album-clip.png"}/>
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}Welcome to Bee Blooms, an app that takes in location data and suggests pollinator-friendly plants that can be planted around you!</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
