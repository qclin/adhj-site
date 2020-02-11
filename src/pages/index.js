import React from "react"
import Layout from "../components/layout"
import Collage from "../components/collage"
import ThemeNavigation from "../components/nav-themes"

import SEO from "../components/seo"

export default function() {
  return (
    <Layout>
      <SEO title="Home" />
      <ThemeNavigation />
      <Collage />
    </Layout>
  )
}
