import React from "react"

export default ({ pageContext: { project } }) => (
  <section>
    {project.TITLE} -<p>{project.DESCRIPTION}</p>
  </section>
)
