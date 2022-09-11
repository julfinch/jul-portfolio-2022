import React, { useEffect } from "react";
import "./style.scss";
import ButtonProjects from "../ButtonProjects";
import { FiArrowUpRight } from "react-icons/fi";
import { SiReact } from "react-icons/si";
import { gsap } from "gsap";

export default function ViewSection({icons}) {

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".section-2-button",{duration: 0, css: {visibility: 'visible'}})
    });
  }, []);


  return (
    <div className="view-section" data-scroll-section>
        <div className="section-2-button">
          <ButtonProjects/>
        </div>
      <div className="section-2" data-scroll  >
        
            <h1 
                data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed="-3"
            >
            react projects <FiArrowUpRight size={70}/> see all react projects See all
            </h1>
            <h1 
                data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed="3"
            >
             See all <SiReact size={70}/> react projects see all react projects
            </h1>
            <h1 
                data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed="-3"
            >
            projects <FiArrowUpRight size={70}/> see all <SiReact size={70}/> react projects See all react 
            </h1>
        </div>
      
    </div>
  );
}
