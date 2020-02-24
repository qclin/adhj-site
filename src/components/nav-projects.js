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
  const listWrapper = useRef(null)
  const [truncated, setTruncated] = useState(false)

  useEffect(() => {
    setTruncated(
      listWrapper.current.offsetWidth < listWrapper.current.scrollWidth
    )
  }, [])

  const handleLeftClick = () => {
    listWrapper.current.scrollLeft -= 100
  }
  const handleRightClick = () => {
    listWrapper.current.scrollLeft += 100
  }

  return (
    <nav id="nav-projects">
      {truncated && (
        <button
          id="prev"
          className="controls no-style"
          onClick={() => handleLeftClick()}
        >
          &#60;
        </button>
      )}

      <div className={theme && `bg-${getThemeKey(theme)} list`}>
        <ul className="scrollbar-container" ref={listWrapper}>
          {projects.nodes
            .filter(ea => ea.data.THEME === theme)
            .map((item, i) => (
              <li key={item.recordId} className="project-links project-titles">
                <Link
                  activeClassName="active"
                  to={`/projects/${item.data.IDENTIFIER}`}
                >
                  {item.data.YEAR}
                  <br />
                  {item.data.TITLE}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      {truncated && (
        <button
          id="next"
          className="controls no-style"
          onClick={() => handleRightClick()}
        >
          &#62;
        </button>
      )}
    </nav>
  )
}

function getThemeKey(theme) {
  return Object.keys(THEMES).filter(key => THEMES[key] === theme)
}
