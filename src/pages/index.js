import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
// import Collage from "../components/collage"
import ParaSpring from "../components/paraSpring"
import Menu from "../components/menu"
import SideBar from "../components/side-bar"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <ParaSpring />
  </Layout>
)

export default IndexPage
