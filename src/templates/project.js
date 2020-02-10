import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ProjectNav from "../components/project-nav"

export default ({ pageContext: { project, images } }) => (
  <body class="projects">
    <Layout>
      <nav className="tc">
        <div className="navigation fl">
          <Link to="/">H</Link>
        </div>
        <ProjectNav theme={project.THEME} />
      </nav>
      <section className="center image-wrapper">
        {images.map(item => (
          <div className="w-60 margin-auto image-figure">
            <figure>
              <Img
                fluid={item.childImageSharp.fluid}
                alt={item.Key}
                key={item.Key}
              />
            </figure>
            <figcaption className="image-captions">{item.Key}</figcaption>
          </div>
        ))}
      </section>
      <section>
        <h1>{project.TITLE}</h1>
        <div className="date">{project.YEAR}</div>
        <p className="description measure">{project.DESCRIPTION}</p>
      </section>
    </Layout>
  </body>
)
