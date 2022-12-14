import React from "react";
import { useState } from "react";
import "./Header.css"

export default function Header() {

  const pages = [
    'About',
    'Resources'
  ]

  const [hovered, setHovered] = useState('')
  
  return (
    <header>
      <span>
        tech-opportunity
      </span>
      <nav>
        <ul>
          {pages.map(page => {
            const path = `/${page.toLowerCase()}`
            const isHovered = hovered === path
            console.log(path)
            return(
              <li key={page}>
                <a href={path}>{page}</a>
              </li>  
            )
          })}
        </ul>
      </nav>
    </header>
  );
}