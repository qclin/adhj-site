import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/side-bar"

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
      <main className="info-pages">
        <SEO title="Drawings" />
        <SideBar />
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
      </main>
    </Layout>
  )
}
