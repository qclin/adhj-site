import React from "react"
import { THEMES } from "../utils/enums"

export default function({ theme, setTheme }) {
  return (
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
  )
}
