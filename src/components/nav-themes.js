import React, { useState } from "react"
import { THEMES } from "../utils/enums"
import ProjectNavigation from "../components/nav-projects"

export default function({
  isProjectPage = false,
  selectedTheme,
  selectedProjectId,
  canvas,
}) {
  const [theme, setTheme] = useState(selectedTheme)

  return (
    <>
      <ProjectNavigation theme={theme} selectedProjectId={selectedProjectId} />
      <div id="bottom-docker">
        <ul id="nav-theme" className={isProjectPage && "project-page"}>
          {Object.keys(THEMES).map((key, index) => (
            <li
              className={
                THEMES[key] === theme
                  ? `selected-${key} dib ttu`
                  : "dib ttu theme-items"
              }
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
    </>
  )
}
