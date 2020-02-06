import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function() {
  const { drawings } = useStaticQuery(graphql`
    query drawingsQuery {
      drawings: allAirtable(
        filter: { table: { eq: "DRAWINGS" }, data: { TITLE: { ne: null } } }
        sort: { fields: data___YEAR, order: DESC }
      ) {
        nodes {
          data {
            IDENTIFIER
            TITLE
            YEAR
            LINK
          }
          recordId
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Drawings" />
      <section className="w-100">
        {drawings.nodes.map((item, i) => (
          <div key={item.recordId} className="drawings w-50 fl">
            <img src={item.data.LINK} alt={item.data.name} />
            <caption>
              {item.data.TITLE} - {item.data.YEAR}
            </caption>
          </div>
        ))}
      </section>
      <Link to="/">ADHJ</Link>
    </Layout>
  )
}
