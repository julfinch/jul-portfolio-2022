import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import useOnScreen from "../../hooks/useOnScreen";
import gsap from "gsap";
import { motion } from "framer-motion";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";
import "./style.scss"
import ButtonFooter from "../ButtonFooter";
import CV from "../../assets/CV_Jul_Danreb_Lactao.pdf";

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null)
  const [reveal, setReveal] = useState(false);
  
  const onScreen = useOnScreen(ref);
  const background = onScreen ? "#000" : "#f5f0ec";
    
  useEffect(() => {
      gsap.to("body", {
        duration: 1, 
        backgroundColor: background, 
        ease: "none"
      });
  }, [background])
  
  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen])

  useEffect(() => {
    if(reveal){
    const split = new SplitText("#contacts-text",{
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#contacts-text",{
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to([".contacts", ".nav-footer"],{duration: 0, css: {visibility: 'visible'}})
    gsap.fromTo(split.lines, {y:200}, {
      duration: 3,
      y: 0,
      opacity: 1,
      stagger: 0.4,
      ease: "power2",
    });
    gsap.from([".nav-footer", ".contacts-info"], {
      duration: 3,
      y: 50,
      opacity: 0,
      stagger: 0.4,
      delay: 2,
      ease: "power2",
    });

  }
  }, [reveal])
  
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <section className="footer" data-scroll-section>
            <div className="nav-footer">
              <Link to="/">HOME</Link>
              <Link to="/projects">Projects</Link>
            </div>
        <div ref={ref} className={cn("contacts", {"is-reveal": reveal })} id="contacts-text">
          <h1 className="title-1">GET IN</h1>
          <h1 className="title-2">TOUCH*</h1>
          <motion.div className="arrow" initial={{ y: 11 }} animate={{ y: -3 }}
          transition={{
          yoyo: Infinity,
          duration: 0.5,
          ease: "easeInOut"
          }}>↓</motion.div>
          <div className="button-wrapper">
            <div onClick={() => {handleCopy("julfinch@gmail.com"); setIsClicked(true);}}>
              <ButtonFooter text={isClicked ? "Copied!" : "julfinch@gmail.com"}/>
            </div>
            <a href={CV} download>
              <ButtonFooter text="Download CV"/>
            </a>
          </div>
          
        </div>
        <div className="contacts-info">
            <div className="socials">
              <h3 className="socials-link"><Link to="https://www.linkedin.com/in/jul-danreb-lactao-b5b27027" target="_blank" rel="noopener noreferrer" >LINKEDIN</Link></h3>
              <h3 className="socials-link"><Link to="https://github.com/julfinch" target="_blank" rel="noopener noreferrer" >github</Link></h3>
            </div>
            <h3 className="copyright">Jul Danreb Lactao © 2022</h3>
        </div>
        <div className="footer-bar"></div>
    </section>
  )
}
