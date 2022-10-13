import React from 'react';
import { SiReact, SiVite, SiGatsby, SiSass, SiTailwindcss, SiStyledcomponents, SiMaterialui, SiNetlify, SiRedux, SiGreensock } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import project1 from './projects-iptracker.png';
import project2 from './projects-admindashboard.png';
import project3 from './projects-shortly.png';
import project4 from './projects-socially.png';
import project5 from './projects-neublock.png';
import project6 from './projects-portfolio.png';

const images = [
  {
    src: project5,
    title: "NeuBlock",
    subtitle:
      "NeuBlock is a Charting and NFT-Crypto Tracker app that was accomplished using Redux Toolkit and Ant Design. It consumes Webit and Opensea for the NFT, Coinranking for crypto and Bing for news, all of which came from RapidAPI. The charting tool used is provided by Tradingview.",
    link: "https://neublock.vercel.app/",
    github: "https://github.com/julfinch/crypto-finch",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <AiFillApi  size={24} />, icon_name: "API"  },
      { icon: <SiRedux  size={24} />, icon_name: "Redux Toolkit"  },
    ] 
  },
  {
    src: project1,
    title: "Find This IP",
    subtitle:
      "Find this IP website is an IP-tracker that shows you the location, timezone, and the internet service provider of the IP Address that you would like to search using the API provided by IPAPI.co. The location will then be shown in the map below using the API provided by LEAFLET and the tiles layer is provided by OpenStreetMap. ",
    link: "https://find-this-ip.vercel.app/",
    github: "https://github.com/julfinch/ip-tracker-react",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiTailwindcss  size={24} />, icon_name: "Tailwind"  },
      { icon: <AiFillApi  size={24} />, icon_name: "API"  },
    ] 
  },
  {
    src: project2,
    title: "FinchPro",
    subtitle:
      "FinchPro is an admin dashboard react app that utilizes some of the great components created by Syncfusion. With the use of useContext, the dashboard has the capability to change the theme, current color, and reacts to the change of the screen size to automatically hide the sidebar that is visible by default.",
    link: "https://finch-dashboard.vercel.app/",
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
      { icon: <AiFillApi  size={24} />, icon_name: "API"  },
    ] 
  },
  {
    src: project4,
    title: "Socially",
    subtitle:
      "Socially is a mock-up social media website that applies Material-UI, a library of React components that offers a comprehensive suite of UI tools which helped a lot in realizing this project. It is really a powerful tool and very enjoyable to use, it's no question that this easily became my favorite UI library yet. One doesn't need to be a designer to implement a visually stunning website.",
    link: "https://socially-finch.vercel.app/",
    github: "https://github.com/julfinch/socially",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiMaterialui  size={24} />, icon_name: "MUI-5" },
      { icon: <SiStyledcomponents  size={24} />, icon_name: "Styled"  },
    ] 
  },
  {
    src: project6,
    title: "Portfolio",
    subtitle:
      "This website is a showcase portfolio that exhibits my web development skills in using React. For this project, I used Gatsby and applied Javascript animations for the interactions using Greensock(GSAP) and Framer Motion. As for my CSS styling, I used Sass and to achieve a more professional-looking portfolio website, I also applied Locomotive-Scroll and Smooth-Scroll.",
    link: "https://jul-lactao.vercel.app/",
    github: "https://github.com/julfinch/jul-portfolio-2022",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiGatsby  size={24} />, icon_name: "Gatsby"  },
      { icon: <SiSass   size={24} />, icon_name: "Sass"  },
      { icon: <SiGreensock  size={24} />, icon_name: "GSAP"  },
    ] 
  }
];

export default images;