import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { THEMES } from "../utils/enums"

export default function() {
  const [theme, setTheme] = useState()

  const { projects } = useStaticQuery(graphql`
    query MenuQuery {
      projects: allAirtable(
        filter: {
          table: { eq: "PROJECTS" }
          data: { IDENTIFIER: { ne: null } }
        }
        sort: { fields: data___YEAR, order: DESC }
      ) {
        nodes {
          data {
            IDENTIFIER
            THEME
            DESCRIPTION
            TITLE
            YEAR
          }
          recordId
        }
      }
    }
  `)

  return (
    <div id="menu">
      <ul className={theme && `bg-${getThemeKey(theme)}`} id="nav-projects">
        {projects.nodes
          .filter(ea => ea.data.THEME === theme)
          .map((item, i) => (
            <li key={item.recordId} className="project-links dib">
              <a>
                {item.data.YEAR} <br />
                {item.data.TITLE}
              </a>
            </li>
          ))}
      </ul>
      <h3>Projects</h3>
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

function getThemeKey(theme) {
  return Object.keys(THEMES).find((key, index) => {
    if (THEMES[key] === theme) return key
  })
}
