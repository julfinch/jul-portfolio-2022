import React, { useEffect } from "react";
import "./styles.scss";
import gsap from "gsap";
import images from "../../images/images";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import CustomCursor from "../../CustomCursor";
import Scroll from "../../hooks/useSmoothScroll";
import ButtonHeader from "../../components/ButtonHeader";
import image1 from "../../images/projects-admindashboard.png";
import image2 from "../../images/projects-iptracker.png";
import image3 from "../../images/projects-shortly.png";
import image4 from "../../images/projects-socially.png";
import image5 from "../../images/projects-dataprotect.png";
import useWindowSize from "../../hooks/useWindowSize";

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Jul Danreb Lactao</title>
    <meta name="description" content="Portfolio Website of Jul Danreb Lactao using React JS"/>
  </>
)

function Projects({src, index}) {
  const proj = gsap.timeline();
  const size = useWindowSize();
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
    // images reveal animation
    proj.to(["#hero-content__image1","#hero-content__image2","#hero-content__image3","#hero-content__image4","#hero-content__image5"], { 
      duration: 1.6,
      ease: 'power1.out',
      startAt: {y: 200},
      y: 0,
      opacity: 1,
      stagger: 0.35
    });
    // images exit animation
    proj.to(["#hero-content__image1","#hero-content__image2","#hero-content__image3","#hero-content__image4","#hero-content__image5"], { 
      duration: 1,
      ease: 'none',
      y: -200,
      opacity: 0,
      stagger: 0.15
    });
    //hero title and others reveal
    proj.to(["#hero-content__text","#hero-content__arrow",".hero-nav"], { 
        duration: 2,
        ease: 'power1.out',
        startAt: {y: 190},
        y: 0,
        opacity: 1,
        stagger: 0.35
    });
  }, [proj])

  //Open Link in New Tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  //motion variants
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
    <div className="projects">
    {size.width > 600 && <CustomCursor/>}
      <Scroll/>
      <svg class="projects-overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
			  <path class="projects-overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
		  </svg>
      <section className="projects-hero">
        <div className="hero-nav">
          <Link to="https://jul-lactao.netlify.app/">JUL DANREB LACTAO</Link>
        </div>
        <div id="hero-content">
          <div id="hero-content__text"><h2>PROJECTS</h2></div>
          <div id="hero-content__arrow"><ButtonHeader/></div>

          <img id="hero-content__image1" src={image1} alt="hero project 1"/>
          <img id="hero-content__image2" src={image2} alt="hero project 2"/>
          <img id="hero-content__image3" src={image3} alt="hero project 3"/>
          <img id="hero-content__image4" src={image4} alt="hero project 4"/>
          <img id="hero-content__image5" src={image5} alt="hero project 5"/>
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
                <Link to={item.link} target="_blank" rel="noopener noreferrer" >Live Demo</Link>
                <Link to={item.github} target="_blank" rel="noopener noreferrer" >Github</Link>
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
    </>
  );
}

export default Projects;
