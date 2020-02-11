import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { THEMES } from "../utils/enums"

export default function({ theme }) {
  const { projects } = useStaticQuery(graphql`
    query ProjectLinkQuery {
      projects: allAirtable(
        filter: { table: { eq: "PROJECTS" } }
        sort: { fields: data___YEAR, order: DESC }
      ) {
        nodes {
          data {
            IDENTIFIER
            THEME
            TITLE
            YEAR
          }
          recordId
        }
      }
    }
  `)

  return (
    <ul className={theme && `bg-${getThemeKey(theme)}`} id="nav-projects">
      {projects.nodes
        .filter(ea => ea.data.THEME === theme)
        .map((item, i) => (
          <li key={item.recordId} className="project-links project-titles dib">
            <a href={`/projects/${item.data.IDENTIFIER}`}>
              {item.data.YEAR} <br />
              {item.data.TITLE}
            </a>
          </li>
        ))}
    </ul>
  )
}

function getThemeKey(theme) {
  return Object.keys(THEMES).filter(key => THEMES[key] === theme)
}
