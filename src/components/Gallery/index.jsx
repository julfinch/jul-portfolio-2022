import React, { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link  } from "gatsby";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import { motion } from "framer-motion";
import image1 from "../../images/ip-tracker-react.png";
import image2 from "../../images/admin-dashboard.png";
import image3 from "../../images/socially-finch.png";

import "./style.scss";

gsap.registerPlugin(ScrollTrigger)

const images = [
  {
    src: image1,
    title: "Find This IP",
    link: "https://find-this-ip.netlify.app/",
    github: "https://github.com/",
  },
  {
    src: image2,
    title: "FinchPro",
    link: "https://finch-dashboard.netlify.app/",
    github: "https://github.com/",
  },
  {
    src: image3,
    title: "Socially",
    link: "https://socially-finch.netlify.app/",
    github: "https://github.com/",
  },
];

function GalleryItem({
  src,
  title,
  updateActiveImage,
  index,
  link,
  github
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
    
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <div
      className="gallery-item-wrapper"
      ref={ref}
    >
      
      <div></div>
      <div className={"gallery-item"}>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        >
          <h1 className="gallery-info-title">{title}</h1>
          <div className="gallery-icons">
            <Link to={link} target="_blank" rel="noopener noreferrer" ><div><BsFillArrowUpRightCircleFill size={34} /></div></Link>
            <Link to={github} target="_blank" rel="noopener noreferrer" ><div><SiGithub size={34} /></div></Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");
      
        gsap.to([".gallery-title",".gallery-counter"],{duration: 0, css: {visibility: 'visible'}})
        gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        delay: 0.1,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap" >

      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        <motion.div className="gallery-title first-header" initial={{ x: -300 }} whileInView={{ x: 0, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>
          <span>Selected</span>
        </motion.div>
        {images.map((image, index) => (
          <GalleryItem
            ref={galleryRef}
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
        <motion.div className="gallery-title second-header"  initial={{ x: 300 }} whileInView={{ x: 0, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>
          <span>works</span>
        </motion.div>
      </div>
          
    </section>
  );
}
