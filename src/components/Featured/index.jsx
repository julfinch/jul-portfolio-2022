import React from "react";
import icons from "../../images/icons";
import "./style.scss";
import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="section-5" >
        <h2>Tech Stack</h2>
        <div className="stack-container" >
        {icons.map((item, index) => (
          <>
            <motion.div className="stack" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { type: "easeOut", duration: 1} }} viewport={{ once: true }}>
              <div key={index} className="stack-image">
                <img src={item.src} alt={`${item.title} icon`} />
              </div>
              <div className="stack-title">{item.title}</div>
            </motion.div>
          </>
        ))}
        </div>
      </div>
    </section>
  );
}
