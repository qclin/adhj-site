import React, { useState } from "react"
import { Link } from "gatsby"

import { THEMES } from "../utils/enums"
import ProjectNavigation from "../components/nav-projects"
import SideBar from "./side-bar"

export default function({
  isProjectPage = false,
  selectedTheme,
  selectedProjectId,
  canvas,
  muted = false,
}) {
  const [theme, setTheme] = useState(selectedTheme)
  const notSelectedStyle = theme
    ? "not-selected dib ttu theme-items"
    : "dib ttu theme-items"
  return (
    <nav className={isProjectPage ? "fixed project-page" : "tc"}>
      {isProjectPage && (
        <div className="navigation fixed left-0 top-0">
          <Link to="/" className="pa1">
            H
          </Link>
        </div>
      )}
      {!muted && (
        <ProjectNavigation
          theme={theme}
          selectedProjectId={selectedProjectId}
        />
      )}
      <SideBar />
      {!muted && (
        <div id="bottom-docker">
          <ul id="nav-theme" className={isProjectPage && "project-page"}>
            {Object.keys(THEMES).map((key, index) => (
              <li
                className={
                  THEMES[key] === theme
                    ? `selected-${key} selected dib ttu`
                    : notSelectedStyle
                }
                key={key}
              >
                <a
                  href={`#${key}`}
                  onClick={() => {
                    setTheme(THEMES[key])
                    if (!isProjectPage) {
                      canvas.current.scrollTo(index)
                    }
                  }}
                >
                  {THEMES[key].replace(" ", "\r\n")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
