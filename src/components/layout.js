import "../styles/index.scss"
import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import SideBar from "./side-bar"
import SEO from "./seo"

import "./layout.css"

const Layout = ({
  children,
  isHomePage = false,
  seoTitle = "Anne Duk Hee Jordan",
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title={seoTitle} />
      <div>
        {!isHomePage && (
          <div className="navigation fixed left-0 top-0 z-5">
            <Link to="/" className="pa1">
              H
            </Link>
          </div>
        )}
        <SideBar />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
