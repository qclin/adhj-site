import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { THEMES } from "../utils/enums"
import clsx from 'clsx'; 

const ProjectNavigation = ({ theme, isProjectPage }) =>  {
  const { projects } = useStaticQuery(graphql`
    query ProjectLinkQuery {
      projects: allAirtable(
        filter: { table: { eq: "PROJECTS" }
                  data: { IDENTIFIER: { ne: null } }
                }
        sort: {data: {YEAR: DESC}}
        
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
  const titleRefs = useRef([])

  const [truncated, setTruncated] = useState(false)
  const themedProjects = projects.nodes.filter(ea => ea.data.THEME === theme)

  useEffect(() => {
    setTruncated(
      listWrapper.current.offsetWidth < listWrapper.current.scrollWidth
    )

    const active = titleRefs.current.find(
      title => title.classList.value === "active"
    )
    if (active) {
      listWrapper.current.scrollTo(
        active.offsetLeft - listWrapper.current.offsetWidth / 2,
        0
      )
    }
  }, [])

  const handleLeftClick = () => {
    listWrapper.current.scrollLeft -= 100
  }
  const handleRightClick = () => {
    listWrapper.current.scrollLeft += 100
  }
  
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

      <div
        className={clsx(theme && `bg-${getThemeKey(theme)} list`, isProjectPage && "project-page")}
      >
        <ul className="scrollbar-container" ref={listWrapper}>
          {themedProjects.map((item, i) => (
            <li key={item.recordId} className="project-links project-titles">
              <Link
                activeClassName="active"
                to={`/projects/${item.data.IDENTIFIER}`}
                ref={ref => titleRefs.current.push(ref)}
              >
                <span className="date"> {item.data.YEAR} </span>
                <br />
                <span className="title"> {item.data.TITLE}</span>
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


export default ProjectNavigation; 

function getThemeKey(theme) {
  return Object.keys(THEMES).find(key => THEMES[key] === theme)
}
