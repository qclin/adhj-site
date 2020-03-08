import React, { useState } from "react"

import { THEMES } from "../utils/enums"
import ProjectNavigation from "../components/nav-projects"

export default function({
  isProjectPage = false,
  isMuted = false,
  selectedTheme,
  canvas,
}) {
  const [theme, setTheme] = useState(selectedTheme)

  const showThemeList = () => {
    setTheme(null)
  }
  const notSelectedStyle = theme
    ? "not-selected theme-items tl"
    : "neutral theme-items tl"

  return (
    <nav className={isProjectPage ? "fixed project-page" : "tc home-page"}>
      {!isMuted && theme && (
        <ProjectNavigation theme={theme} isProjectPage={isProjectPage} />
      )}
      {!isMuted && (
        <div id="bottom-docker">
          {!isProjectPage && theme && (
            <button
              id="expandTheme"
              className="no-style"
              onClick={() => showThemeList()}
            >
              +
            </button>
          )}
          <ul id="nav-theme" className={isProjectPage && "project-page"}>
            {Object.keys(THEMES).map((key, index) => (
              <li
                className={
                  THEMES[key] === theme
                    ? `selected-${key} selected dib tl ${key}`
                    : `${notSelectedStyle} ${key} `
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
