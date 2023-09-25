import React, { useRef, useState, useEffect, useCallback } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { THEMES } from "../utils/enums"
import clsx from 'clsx'; 
import debounce from "lodash/debounce"; 

const ScrollPosibiton  = {
  START: 'start',
  END: 'end',
  BOTH: 'both'
}

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

  const [scrollable, setScrollable] = useState(false)
  const themedProjects = projects.nodes.filter(ea => ea.data.THEME === theme)

  useEffect(() => {
    setScrollable(
      listWrapper.current.offsetWidth < listWrapper.current.scrollWidth ? ScrollPosibiton.END : false
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


  const toggleEdgeArrows = debounce((isAtTheEnd, scrollLeft) => {
    
    if (isAtTheEnd) {
      setScrollable(ScrollPosibiton.START);
    } else if (scrollLeft === 0) {
      setScrollable(ScrollPosibiton.END);
    } else if (scrollable !== ScrollPosibiton.BOTH) {
      setScrollable(ScrollPosibiton.BOTH);
    }
}, 500);

const onScroll = useCallback(() => {
    if (!listWrapper || !listWrapper.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = listWrapper.current;
    const scrollXMax = scrollWidth - offsetWidth;
    const isAtTheEnd = scrollLeft === scrollXMax;

    toggleEdgeArrows(isAtTheEnd, scrollLeft);
}, [toggleEdgeArrows]);


  const handleLeftClick = useCallback(() => {
    listWrapper.current?.scrollTo({
        left: listWrapper.current.scrollLeft - 200,
        behavior: 'smooth',
    });
}, [listWrapper.current]);

const handleRightClick = useCallback(() => {
  listWrapper.current?.scrollTo({
        left: listWrapper.current.scrollLeft + 200,
        behavior: 'smooth',
    });
}, [listWrapper.current ]);

  return (
    <nav id="nav-projects" className="w-60-ns">
      {[ScrollPosibiton.START, ScrollPosibiton.BOTH].includes(scrollable)  && (
        <button
          id="prev"
          className="controls no-style"
          onClick={handleLeftClick}
        >
          &#60;
        </button>
      )}

      <div
        className={clsx(theme && `bg-${getThemeKey(theme)} list`, isProjectPage && "project-page")}
      >
        <ul className="scrollbar-container" ref={listWrapper} onScroll={onScroll}>
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
      {[ScrollPosibiton.END, ScrollPosibiton.BOTH].includes(scrollable) && (
        <button
          id="next"
          className="controls no-style"
          onClick={handleRightClick}
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
