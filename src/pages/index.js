import React, { useState } from "react"
import Layout from "../components/layout"
import Collage from "../components/collage"
import ThemeNavigation from "../components/nav-themes"
import ProjectNavigation from "../components/nav-projects"

import SEO from "../components/seo"

export default function() {
  const [theme, setTheme] = useState()
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectNavigation theme={theme} />
      <ThemeNavigation theme={theme} setTheme={setTheme} />
      <Collage />
    </Layout>
  )
}
