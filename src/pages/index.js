import React, { useRef } from "react"
import Layout from "../components/layout"
import Collage from "../components/collage"
import ThemeNavigation from "../components/nav-themes"

import SEO from "../components/seo"

export default function() {
  const canvas = useRef(null)

  return (
    <Layout>
      <SEO title="Home" />
      <ThemeNavigation canvas={canvas} />
      <Collage canvas={canvas} />
    </Layout>
  )
}
