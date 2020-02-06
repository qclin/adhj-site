import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function() {
  const { press } = useStaticQuery(graphql`
    query pressQuery {
      press: allAirtable(
        filter: { table: { eq: "PRESS" }, data: { TITLE: { ne: null } } }
        sort: { fields: data___YEAR, order: DESC }
      ) {
        nodes {
          data {
            LINK
            TITLE
            AUTHOR
            PUBLISHER
            MONTH
            YEAR
          }
          recordId
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="News" />
      {press.nodes.map((item, i) => (
        <div key={item.recordId}>
          <a href={item.data.LINK} target="_blank" rel="noopener noreferrer">
            {item.data.TITLE} - {item.data.MONTH}, {item.data.YEAR}
          </a>
          {item.data.AUTHOR}, {item.data.PUBLISHER}
        </div>
      ))}
      <Link to="/">ADHJ</Link>
    </Layout>
  )
}
