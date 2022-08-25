import React, { useEffect } from "react"
import './style.scss'

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";


export default function SectionHeader({title, subtitle}) {

  return (
    <div className="section-header">
      <h1 className="section-header-title" id="section-header-title">{title}</h1>
      <h3 className="section-header-sub">{subtitle}</h3>
    </div>
  )
}