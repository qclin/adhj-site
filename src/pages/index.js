import React, { useRef } from "react"
import Layout from "../components/layout"
import Collage from "../components/collage"
import ThemeNavigation from "../components/nav-themes"

import Seo from "../components/seo"

const Home = () => {
  const canvas = useRef(null)

  return (
    <Layout isHomePage>
      <Seo title="Home" />
      <ThemeNavigation canvas={canvas} />
      <Collage canvas={canvas} />
    </Layout>
  )
}

export default Home