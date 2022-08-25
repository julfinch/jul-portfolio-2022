import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import ViewSection from  "../components/ViewSection";
import Featured from "../components/Featured";
import useLocoScroll from "../hooks/useLocoScroll";

import "../styles/home.scss";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useEffect(() => {
    gsap.set(".intro", {duration: 0, visibility: 'visible'})
    gsap.from('.intro-title', {
      duration: 2,
      x: 100,
      opacity: 0,
      ease: 'power1.out',
    })
  }, []);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = useState(3);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };
  
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1300);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor/>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <p className="loader-bg marquee1">Hi Kumusta Hola Hi</p>
          <p className="loader-bg marquee2">Ciao Hola Hi Ciao Hola</p>
          <p className="loader-bg marquee3">Welcome Ciao Welcome</p>
          <p className="loader-bg marquee4">Bienvenido Hello Hi</p>
          <div class="intro">
            <h1 class="intro-title">Jul Danreb Lactao</h1>
          </div>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
          style={{overflowY:"hidden"}}
        >
          <Header/>
          <About />
          <Gallery/>
          <ViewSection/>
          <Featured/>
          <Footer/>
        </div>
      )}
    </>
  );
};
export default Home;
