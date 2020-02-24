import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/side-bar"

export default function() {
  const { drawings, images } = useStaticQuery(graphql`
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
      images: allS3ImageAsset(
        sort: { order: ASC, fields: Key }
        filter: { Key: { regex: "/00_DRAWINGS/" } }
      ) {
        nodes {
          Key
          childImageSharp {
            fluid(sizes: "100") {
              src
              srcSet
              aspectRatio
              sizes
            }
          }
          id
        }
      }
    }
  `)

  return (
    <Layout>
      <main className="info-pages">
        <SEO title="Drawings" />
        <SideBar />
        <section className="list-wrapper">
          {images.nodes.map((item, idx) => (
            <div className="w-100 w-40-ns dib ma2">
              <figure>
                <Img
                  fluid={item.childImageSharp.fluid}
                  alt={`drawings${idx}`}
                />
              </figure>
              <figcaption>{item.Key.split("/")[1].split(".")[0]}</figcaption>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  )
}

// {drawings.nodes.map((item, i) => (
//   <div key={item.recordId} className="drawings w-50 fl">
//     <img src={item.data.LINK} alt={item.data.name} />
//     <caption>
//       {item.data.TITLE} - {item.data.YEAR}
//     </caption>
//   </div>
// ))}
