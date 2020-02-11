import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectNav from "../components/nav-projects"
import ProjectImages from "../components/project-images" // moving to sub files with fragments

export default ({ pageContext: { project, images } }) => {
  return (
    <section className="projects">
      <Layout>
        <nav className="tc">
          <div className="navigation fl">
            <Link to="/">H</Link>
          </div>
          <ProjectNav theme={project.THEME} />
        </nav>

        <ProjectImages images={images} />
        <section>
          <h1>{project.TITLE}</h1>
          <div className="date">{project.YEAR}</div>
          <p className="description measure">{project.DESCRIPTION}</p>
        </section>
      </Layout>
    </section>
  )
}
