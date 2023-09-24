import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const NewsPage = () =>  {
  const { news } = useStaticQuery(graphql`
    query newsQuery {
      news: allAirtable(
        filter: { table: { eq: "NEWS" }, data: { TITLE: { ne: null } } }
        sort: {data: {YEAR: DESC}}
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
    <Layout seoTitle="News">
      <main className="info-pages" id="press">
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

export default NewsPage