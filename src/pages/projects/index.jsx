import React, { useEffect, useRef,useState } from "react";
import "./styles.scss";
import gsap from "gsap";
import images from "../../images/images";
import { motion } from "framer-motion";
import "locomotive-scroll/src/locomotive-scroll.scss";
import useLocoScroll from "../../hooks/useLocoScroll";
import { Link } from "gatsby";

function Projects({src, index}) {
  const proj = gsap.timeline();
  useEffect(() => {
    
    proj.set(".projects-overlay__path", {
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
    })
    proj.to(".projects-overlay__path", { 
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
    }, 0)
    proj.to(".projects-overlay__path", { 
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
    })
    proj.to(".projects",{duration: 0, css: {backgroundColor: '#EFE9D0'}})
    // now reveal
    proj.to(".projects", { 
      opacity: 1
    })
    proj.set(".projects-overlay__path", { 
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
    })
    proj.to(".projects-overlay__path", { 
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
    })
    proj.to(".projects-overlay__path", { 
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
    })
    // menu items translate animation
    
    proj.to(["#projects-hero-text",".hero-nav"], { 
        duration: 2,
        ease: 'power4',
        startAt: {y: 190},
        y: 0,
        opacity: 1,
        stagger: 0.05
    }, '>-=1.1');
  }, [proj])
  
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

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
    }, 100);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  
  //Open Link in New Tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        type: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const child = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  return (
    <> 
      {preloader ? (
        <div className="loader-wrapper absolute">
        </div>
      ) : (
    <div className="projects" ref={ref} data-scroll-container>
      <svg class="projects-overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
			  <path class="projects-overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
		  </svg>
      <section className="projects-hero disable-scrollbars">
        <div className="hero-nav">
          <Link to="/">HOME</Link>
        </div>
        <div className="hero-content">
          <h2 id="projects-hero-text">PROJECTS</h2>
        </div>
      </section>
        {images.map((item, index) => (
          <>
            <div className="projects-item" id={index + 1}>
              <motion.div className="projects-item-index" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "easeOut", duration: 1, delay: 1} }} viewport={{ once: true }}>0{index + 1}</motion.div>
              <div key={index} className="img-container">
                <motion.img src={item.src} alt={`people ${index}`} onClick={() => { openInNewTab(item.link) }} initial={{ scale: 1.6 }} whileInView={{ scale: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}/>
              </div>
              <motion.h1 className="projects-info-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { type: "easeOut", duration: 1,} }} viewport={{ once: true }}>{item.title}</motion.h1>
            </div>
            
            <motion.div className="projects-item-info" initial="hidden" whileInView="visible" variants={list} viewport={{ once: true }}>
              <motion.div variants={child} class="horizontal-line"><span>01</span><span>description</span></motion.div>
              <motion.h3 variants={child} className="projects-info-subtitle">{item.subtitle}</motion.h3>
              <motion.div variants={child} className="projects-links">
                <a href={item.link}>Live Demo</a>
                <a href={item.github}>Github</a>
              </motion.div>
              <motion.div variants={child} class="horizontal-line"><span>02</span><span>stack</span></motion.div>
              <motion.div variants={child} className="projects-info-stack">{item.stack.map((icon) => 
                <div className="projects-info-icon">
                  <div className="icon">{icon.icon}</div>
                  <div className="icon-name">{icon.icon_name}</div>
                </div>
              )}</motion.div>
            </motion.div>
          </>
        ))}

    </div>
    )}
    </>
  );
}

export default Projects;
