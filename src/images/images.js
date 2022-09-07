import React from 'react';
import { SiReact, SiVite, SiGatsby, SiSass, SiTailwindcss, SiMaterialui, SiNetlify } from 'react-icons/si';
import project1 from './projects-iptracker.png';
import project2 from './projects-admindashboard.png';
import project3 from './projects-shortly.png';
import project4 from './projects-socially.png';
import project5 from './projects-dataprotect.png';
import project6 from './projects-portfolio.png';

const images = [
  {
    src: project1,
    title: "Find This IP",
    subtitle:
      "Find this IP website is an IP-tracker that shows you the location, timezone, and the internet service provider of the IP Address that you would like to search using the API provided by IPAPI.co. The location will then be shown in the map below using the API provided by LEAFLET and the tiles layer is provided by OpenStreetMap. ",
    link: "https://find-this-ip.netlify.app/",
    github: "https://github.com/julfinch/ip-tracker-react",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiTailwindcss  size={24} />, icon_name: "Tailwind"  },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  },
  {
    src: project2,
    title: "FinchPro",
    subtitle:
      "FinchPro is an admin dashboard react app that utilizes some of the great components created by Syncfusion. With the use of useContext, the dashboard has the capability to change the theme, current color, and reacts to the change of the screen size to automatically hide the sidebar that is visible by default.",
    link: "https://finch-dashboard.netlify.app/",
    github: "https://github.com/julfinch/admin-dashboard-syncfusion",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiTailwindcss  size={24} />, icon_name: "Tailwind"  },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  },
  {
    src: project3,
    title: "Shortly",
    subtitle:
      "Shortly is a URL Shortener landing page that utilizes the API provided from www.shrtco.de and is a revision of my previous project of the same kind using HTML,CSS, and Javascript. One can type the link they wish to shorten into the input bar and after hitting the submit button, the link provided will be processed by the API and in return, will give us back the shortened link. ",
    link: "https://shortly-shortlink.netlify.app/",
    github: "https://github.com/julfinch/shorten-api",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  },
  {
    src: project4,
    title: "Socially",
    subtitle:
      "Socially is a mock-up social media website that applies Material-UI, a library of React components that offers a comprehensive suite of UI tools which helped a lot in realizing this project.",
    link: "https://socially-finch.netlify.app/",
    github: "https://github.com/julfinch/socially",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiMaterialui  size={24} />, icon_name: "MUI-5" },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  },
  {
    src: project5,
    title: "Data Protect",
    subtitle:
      "Data Protect is a simple landing page that introduced me to React Router DOM. This is the project that served as my playground in understanding and applying what I've learned on how to make the links of a React app work.",
    link: "https://dataprotect-julfinch.netlify.app/",
    github: "https://github.com/julfinch/protect-secure",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  },
  {
    src: project6,
    title: "Portfolio",
    subtitle:
      "This website is a showcase portfolio that exhibits my web development skills in using React. For this project, I used Gatsby and applied Javascript animations for the interactions using Greensock(GSAP) and Framer Motion. As for my CSS styling, I used Sass and to achieve a more professional-looking portfolio website, I also applied Locomotive-Scroll and Smooth-Scroll.",
    link: "https://jul-lactao.netlify.app/",
    github: "https://github.com/julfinch/jul-portfolio-2022",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiGatsby  size={24} />, icon_name: "Gatsby"  },
      { icon: <SiSass   size={24} />, icon_name: "Sass"  },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  }
];

export default images;