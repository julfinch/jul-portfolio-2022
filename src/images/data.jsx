import React from 'react';
import { SiReact, SiVite, SiGatsby, SiSass, SiTailwindcss, SiMaterialui, SiNetlify, SiGithub, SiLinkedin } from 'react-icons/si';
import project1 from './ip-tracker-react.png';
import project2 from './admin-dashboard.png';
import project3 from './shortly.png';
import project4 from './socially-finch.png';
import project5 from './data-protect.png';
import stack1 from './svg/html5.svg';
import stack2 from './svg/css.svg';
import stack3 from './svg/js.svg';
import stack4 from './svg/reactjs.svg';
import stack5 from './svg/nextjs.svg';
import stack6 from './svg/gatsby.svg';
import stack7 from './svg/typescript.svg';
import stack8 from './svg/sass.svg';
import stack9 from './svg/material-ui.svg';
import stack10 from './svg/bootstrap5.svg';
import stack11 from './svg/tailwind.svg';
import stack12 from './svg/firebase.svg';
import stack13 from './svg/git.svg';
import stack14 from './svg/gitlab.svg';
import stack15 from './svg/redux.svg';
import stack16 from './svg/vs.svg';

export const images = [
  {
    src: project1,
    title: "Find This IP",
    subtitle:
      "A website that can show you the location, timezone, and the internet service provider of the IP Address that you would like to search using the API provided by IPAPI. The location will also be shown in the map using the API provided by LEAFLET and the tiles layer is provided by OpenStreetMap. ",
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
    title: "Shoppy",
    subtitle:
      "Admin dashboard react app that utilizes some of the great components created by Syncfusion. With the use of useContext, the dashboard has the capability to change the theme, current color, and reacts to the change of the screen size to automatically hide the sidebar that is visible by default.",
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
      "A URL Shortener landing page that utilizes the API provided from https://shrtco.de/ and is a revision of my previous project of the same kind using HTML,CSS, and Javascript. One can type the link they wish to shorten into the input bar and after hitting the submit button, the link provided will be processed by the API and in return, will give us back the shortened link. ",
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
      "A mock-up social media website that applies Material-UI, a library of React components that offers a comprehensive suite of UI tools which helped a lot in realizing this project.",
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
      "A simple landing page that introduced me to React Router DOM. This is the project that served as my plaground in understanding and applying what I've learned on how to make the links of a React app work.",
    link: "https://dataprotect-julfinch.netlify.app/",
    github: "https://github.com/julfinch/protect-secure",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  },
  {
    src:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    title: "Skew Scrolling",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    link: "",
    github: "",
    stack: [
      { icon: <SiReact  size={24} />, icon_name: "React" },
      { icon: <SiVite  size={24} />, icon_name: "Vite"  },
      { icon: <SiGatsby  size={24} />, icon_name: "Gatsby"  },
      { icon: <SiSass   size={24} />, icon_name: "Sass"  },
      { icon: <SiTailwindcss  size={24} />, icon_name: "Tailwind"  },
      { icon: <SiMaterialui  size={24} />, icon_name: "MUI-5"  },
      { icon: <SiNetlify  size={24} />, icon_name: "Netlify"  },
    ] 
  }
];





export const icons = [
  {
    src: stack1,
    title: "HTML5"
  },
  {
    src: stack2,
    title: "CSS3"
  },
  {
    src: stack3,
    title: "Javascript"
  },
  {
    src: stack4,
    title: "React"
  },
  {
    src: stack5,
    title: "NextJS"
  },
  {
    src: stack6,
    title: "Gatsby"
  },
  {
    src: stack7,
    title: "Typescript"
  },
  {
    src: stack8,
    title: "SASS"
  },
  {
    src: stack9,
    title: "MaterialUI"
  },
  {
    src: stack10,
    title: "Bootstrap5"
  },
  {
    src: stack11,
    title: "TailwindCSS"
  },
  {
    src: stack12,
    title: "Firebase"
  },
  {
    src: stack13,
    title: "Git"
  },
  {
    src: stack14,
    title: "GitLab"
  },
  {
    src: stack15,
    title: "Redux"
  },
  {
    src: stack16,
    title: "VS Code"
  },
]

