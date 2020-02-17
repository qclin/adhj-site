import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  const projectTitles = useRef(null)
  const [truncated, setTruncated] = useState(false)

  useEffect(() => {
    console.log(projectTitles.offsetWidth, projectTitles.scrollWidth)
    setTruncated(projectTitles.offsetWidth < projectTitles.scrollWidth)
  }, [])

  return (
    <div
      className={theme && `bg-${getThemeKey(theme)}`}
      id="nav-projects"
      ref={projectTitles}
    >
      {truncated && <span> prev </span>}
      <ul className="scrollbar-container">
        <span>{truncated}</span>
        {projects.nodes
          .filter(ea => ea.data.THEME === theme)
          .map((item, i) => (
            <li
              key={item.recordId}
              className="project-links project-titles dib"
            >
              <Link
                activeStyle={{ "text-decoration": "underline" }}
                to={`/projects/${item.data.IDENTIFIER}`}
              >
                {item.data.YEAR}
                <br />
                {item.data.TITLE}
              </Link>
            </li>
          ))}
      </ul>
      {truncated && <span> > </span>}
    </div>
  )
}

function getThemeKey(theme) {
  return Object.keys(THEMES).filter(key => THEMES[key] === theme)
}
