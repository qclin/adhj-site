import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectNav from "../components/project-nav"

export default ({ pageContext: { project } }) => (
  <body class="projects">
    <Layout>
      <nav>
        <div className="navigation w-20 dib">
          <Link to="/">H</Link>
        </div>
        <ProjectNav theme={project.THEME} />
      </nav>
      <section>
        <h1>{project.TITLE}</h1>
        <div className="date">{project.YEAR}</div>
        <p className="description measure">{project.DESCRIPTION}</p>
      </section>
    </Layout>
  </body>
)
