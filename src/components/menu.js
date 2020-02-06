import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { THEMES } from "../utils/enums"
import ProjectNav from "./project-nav"

export default function() {
  const [theme, setTheme] = useState()
  return (
    <div id="menu">
      <ProjectNav theme={theme} />
      <div id="bottom-docker">
        <ul id="nav-theme">
          {Object.keys(THEMES).map((key, index) => (
            <li
              className={
                THEMES[key] === theme ? `selected-${key} dib ttu` : "dib ttu"
              }
            >
              <a href={`#${key}`} onClick={() => setTheme(THEMES[key])}>
                {THEMES[key].replace(" ", "\r\n")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
