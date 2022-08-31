import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.scss";
import ButtonHeader from "../ButtonHeader";

export default function Header() {
    const navRef = useRef();
    const headerTL = gsap.timeline();

    useEffect(() => {
      headerTL.set(".header-overlay__path", {
          attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
      })
      headerTL.to(".header-overlay__path", { 
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
      }, 0)
      headerTL.to(".header-overlay__path", { 
          duration: 0.3,
          ease: 'power2',
          attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
      })
      // now reveal
      headerTL.to(".header-container", { 
        opacity: 1
      }) 
      headerTL.set(".header-overlay__path", { 
          attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
      })
      headerTL.to(".header-overlay__path", { 
          duration: 0.3,
          ease: 'power2.in',
          attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
      })
      headerTL.to(".header-overlay__path", { 
          duration: 0.8,
          ease: 'power4',
          attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      })
      headerTL.from("#header-name", {
        duration: 2,
        y: 200,
        opacity: 0,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power1.out',
      }, '>-=1.1')
      headerTL.from(["#header-job","#location"], {
        duration: 2,
        y: 80,
        opacity: 0,
        stagger: 0.5,
        delay: 0.5,
        ease: 'power1.out',
      }, '>-=1.1')
      headerTL.from("#header-arrow", {
        duration: 2,
        y: 200,
        opacity: 0,
        stagger: 0.04,
        ease: 'power1.out',
      }, '>-=1.1')
      headerTL.from(navRef.current, {
        duration: 2,
        opacity: 0,
        y: 50,
        stagger: 0.02,
        delay: 0.5,
        ease: 'power1.out',
      }, '>-=1.1')
    }, [headerTL]);
    
  return (
    <>
      <svg class="header-overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
			  <path class="header-overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
		  </svg>
    <section className="header-container disable-scrollbars" data-scroll-section>
      {/* <Navbar ref={navRef}/> */}
      <h2 id="header-job">REACT  <span>DEVELOPER</span></h2>

      <div id="lower-div">
        <div id="header-name">
          <h1 id="name"><span id="span-1">JUL  DANREB</span> <span id="span-2" >LACTAO</span></h1>
        </div>
        <h2 id="location">CEBU / MANDALUYONG, PH</h2>
        <div id="header-arrow">
          <ButtonHeader/>
        </div>
      </div>

    </section>
    </>
  );
}
