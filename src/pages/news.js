import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function() {
  const { news } = useStaticQuery(graphql`
    query newsQuery {
      news: allAirtable(
        filter: { table: { eq: "NEWS" }, data: { TITLE: { ne: null } } }
        sort: { fields: data___YEAR, order: DESC }
      ) {
        nodes {
          data {
            LINK
            TITLE
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
      {news.nodes.map((item, i) => (
        <div key={item.recordId}>
          <a href={item.data.LINK} target="_blank" rel="noopener noreferrer">
            {item.data.TITLE} - {item.data.MONTH}, {item.data.YEAR}
          </a>
        </div>
      ))}
      <Link to="/">ADHJ</Link>
    </Layout>
  )
}
