import React from "react"
import Layout from "../components/layout"
import ParaSpring from "../components/paraSpring"
import Menu from "../components/menu"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <ParaSpring />
  </Layout>
)

export default IndexPage
