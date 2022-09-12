import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import GalleryMobile from "../components/GalleryMobile";
import ViewSection from  "../components/ViewSection";
import Featured from "../components/Featured";
import useLocoScroll from "../hooks/useLocoScroll";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/home.scss";

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Jul Danreb Lactao</title>
    <meta name="description" content="Portfolio Website of Jul Danreb Lactao using React JS"/>
  </>
)

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  const home = gsap.timeline();
  const size = useWindowSize();

  useEffect(() => {
    home.set(".intro", {duration: 0, visibility: 'visible'})
    home.from('.intro-title', {
      duration: 2,
      x: 100,
      opacity: 0,
      ease: 'power1.out',
    })
    home.to('.intro-title', {
      duration: 1,
      delay: 1,
      x: -100,
      opacity: 0,
      ease: 'power1.out',
    })
    home.to('.loader-bg', {
      duration: 0.5,
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
      { typeof window !== 'undefined' ? size.width > 600 && <CustomCursor/> : null}
      {preloader ? (
        <div className="loader-wrapper absolute">
          <p className="loader-bg marquee1">Kumusta Ciao Hola Hi</p>
          <p className="loader-bg marquee2">Ciao Hola Hi Ciao Hola</p>
          <p className="loader-bg marquee3">Hello Ciao Hi Welcome</p>
          <p className="loader-bg marquee4">Bienvenido Hello Hi</p>
          <div class="intro">
            <h1 class="intro-title">Welcome!</h1>
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
