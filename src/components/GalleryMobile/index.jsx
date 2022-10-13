import React from "react";
import { SiGithub } from "react-icons/si";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link  } from "gatsby";
import { motion } from "framer-motion";
import image1 from "../../images/ip-tracker-react.png";
import image2 from "../../images/admin-dashboard.png";
import image3 from "../../images/socially-finch.png";

import "./style.scss";

export default function GalleryMobile() {
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
    <section className="gallery-mobile" data-scroll-section>
      <div className="gallery-mobile-title">
        <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>Selected works</motion.h2>
      </div>
      
      <div className="gallery-mobile-items">
        
        <motion.div className="gallery-mobile-1 gallery-mobile-wrapper" initial={{ x: 300 }} whileInView={{ x: 0, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>
          <div className="gallery-mobile-image">
            <motion.img src={image1} alt="Find This IP" initial={{ scale: 0.6 }} whileInView={{ scale: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }} />
            <motion.h1 initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }} className="gallery-mobile-title">Find This IP</motion.h1>
            <motion.div className="gallery-mobile-icons" initial="hidden" whileInView="visible" variants={list} viewport={{ once: true }}>
              <Link to="https://find-this-ip.vercel.app/" target="_blank" rel="noopener noreferrer" ><motion.div variants={child}><BsFillArrowUpRightCircleFill size={34} /></motion.div></Link>
              <Link to="https://github.com/julfinch/ip-tracker-react" target="_blank" rel="noopener noreferrer" ><motion.div variants={child}><SiGithub size={34} /></motion.div></Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="gallery-mobile-2 gallery-mobile-wrapper" initial={{ x: -300 }} whileInView={{ x: 0, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>
          <div className="gallery-mobile-image">
            <motion.img src={image2} alt="FinchPro" initial={{ scale: 0.6 }} whileInView={{ scale: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}  />
            <motion.h1 className="gallery-mobile-title" initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>FinchPro</motion.h1>
            <motion.div className="gallery-mobile-icons" initial="hidden" whileInView="visible" variants={list} viewport={{ once: true }}>
              <Link to="https://finch-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer" ><motion.div variants={child}><BsFillArrowUpRightCircleFill size={34} /></motion.div></Link>
              <Link to="https://github.com/julfinch/admin-dashboard-syncfusion" target="_blank" rel="noopener noreferrer" ><motion.div variants={child}><SiGithub size={34} /></motion.div></Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="gallery-mobile-3 gallery-mobile-wrapper" initial={{ x: 300 }} whileInView={{ x: 0, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>
          <div className="gallery-mobile-image">
            <motion.img src={image3} alt="Socially" initial={{ scale: 0.6 }} whileInView={{ scale: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}  />
            <motion.h1 className="gallery-mobile-title" initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>Socially</motion.h1>
            <motion.div className="gallery-mobile-icons" initial="hidden" whileInView="visible" variants={list} viewport={{ once: true }}>
              <Link to="https://socially-finch.vercel.app/" target="_blank" rel="noopener noreferrer" ><motion.div variants={child}><BsFillArrowUpRightCircleFill size={34} /></motion.div></Link>
              <Link to="https://github.com/julfinch/socially" target="_blank" rel="noopener noreferrer" ><motion.div variants={child}><SiGithub size={34} /></motion.div></Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
