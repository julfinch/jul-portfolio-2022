import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import "../styles/404.scss";
import gsap from "gsap";
import { Link } from "gatsby";

const NotFound = () => {
  const navRef = useRef();

  useEffect(() => {
    gsap.to(".not-found-container",{duration: 0, css: {visibility: 'visible'}})
    gsap.from("h1", {
      duration: 2,
      opacity: 0,
      y: -100,
      ease: "bounce",
    });
    gsap.from("span", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "bounce",
      delay: 2,
    });
    gsap.from(navRef.current, {
      duration: 2,
      opacity: 0,
      y: -100,
      ease: "expo.easeInOut",
      delay: 2.4,
    });
  }, [])
  
  return (
    <div className="not-found-container">
      <Navbar red={navRef}/>
      <div className="header">
        <h1>404</h1>
        <span>It seems that you're lost, come back <Link to="/">Home</Link></span>
      </div>
    </div>
  )
}

export default NotFound