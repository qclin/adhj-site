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
  const themedProjects = projects.nodes.filter(ea => ea.data.THEME === theme)
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

  // const handleOnScroll = () => {
  //   var dummy_x = listWrapper.current.offsetWidth
  //   var diff =
  //     listWrapper.current.scrollLeft -
  //     (listWrapper.current.scrollWidth - listWrapper.current.offsetWidth)
  //   if (diff > 0) {
  //     listWrapper.current.scrollTo(diff, 0)
  //   } else if (listWrapper.current.scrollLeft == 0) {
  //     listWrapper.current.scrollTo(dummy_x, 0)
  //   } else if (diff == 0) {
  //     listWrapper.current.scrollTo(0, 0)
  //   }
  // }

  return (
    <nav id="nav-projects" className="w-60-ns">
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
          {themedProjects.map((item, i) => (
            <li key={item.recordId} className="project-links project-titles">
              <Link
                activeClassName="active"
                to={`/projects/${item.data.IDENTIFIER}`}
              >
                {item.data.YEAR}
                <br />
                <span> {item.data.TITLE}</span>
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
