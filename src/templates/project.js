import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectNav from "../components/nav-projects"
import ThemeNavigation from "../components/nav-themes"
import ProjectImages from "../components/project-images" // moving to sub files with fragments
import Video from "../components/video"

export default ({ pageContext: { project, images, media } }) => {
  return (
    <section className="projects">
      <Layout>
        <nav className="tc">
          <div className="navigation fl">
            <Link to="/">H</Link>
          </div>
          <ThemeNavigation
            selectedTheme={project.THEME}
            selectedProjectId={project.IDENTIFIER}
            isProjectPage
          />
        </nav>
        <ProjectImages images={images} />
        <section>
          <h1>{project.TITLE}</h1>
          <div className="date">{project.YEAR}</div>
          <p className="description measure">{project.DESCRIPTION}</p>
        </section>
        {!media.isEmpty && (
          <section>
            {media.map(
              item =>
                item.data.TYPE === "video" && (
                  <Video
                    videoId={item.data.vimeoID}
                    videoTitle={item.data.ID}
                  />
                )
            )}
          </section>
        )}
      </Layout>
    </section>
  )
}
