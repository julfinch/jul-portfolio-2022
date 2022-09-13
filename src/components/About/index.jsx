import React, { useState, useEffect, useRef } from "react"
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import "./style.scss"
import image from "../../images/about-image.jpg"
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { motion } from "framer-motion";

export default function About() {
  gsap.registerPlugin(CSSRulePlugin);
  const ref = useRef();
  const aboutImage = useRef(null);
  const img = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(".about-image:after");
  const about = gsap.timeline();

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
    const split = new SplitText("#headline",{
      type: "lines",
    });
      about.set(".section-0", {duration: 0, visibility: 'visible'})
      about.to(split.lines, {
      duration: 0,
      y: -20,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
      })
      about.to(imageReveal, { duration: 1, cssRule: { width: "0%" }, ease: "power2.easeInOut" })
      about.from(img.current, { duration: 1, scale: 1.6, ease: "power2.easeInOut"})
  }
  }, [reveal]);  

  return (
    <section className={cn("about-section")} data-scroll-section>
        <div id="section-header" data-scroll data-scroll-speed="1" >
            <motion.p 
                data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed="-2"
                 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "easeOut", duration: 1.5} }} viewport={{ once: true }}
            >
                It all started when I was messing 
            </motion.p>
            <motion.p 
                data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed="2"
                 initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}
            >
                around with my codes back in 2005...
            </motion.p>
        </div>
      
      <div className="section-0">
        <div className="about-text">
          <p ref={ref} id="headline" className={cn({'is-reveal': reveal})}>
          My fascination with web development started out back when Friendster was at the pinnacle in the social media space. 
          It served as my artistic medium to pour in my creativity before its eventual downfall, aside from Multiply and Blogger.
          
          The said spaces gave its users the freedom to do so by tinkering its codes using HTML and CSS - both of which I learned all by myself through those platforms.
          <br/><br/><br/>
          <span>My pursuit for front-end development is very much a longing to that passion.</span>
          </p>
        </div>
        <div className="about-image" ref={aboutImage}>
          <img ref={img} src={image} alt="laptop with friendster.com"/>
        </div>
      </div>
      
    </section>
  );
};