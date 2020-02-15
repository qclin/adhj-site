import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/side-bar"

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
      <main className="info-pages">
        <SEO title="News" />
        <SideBar />
        <section className="list-wrapper">
          {news.nodes.map((item, i) => (
            <div className="large-text mb4" key={item.recordId}>
              <a
                href={item.data.LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.data.TITLE} <br />
                {item.data.MONTH}, {item.data.YEAR}
              </a>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  )
}
