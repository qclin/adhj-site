import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

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

  var drawingInfo = drawings.nodes.reduce((acc, obj) => {
    var id = obj.data.IDENTIFIER
    acc[id] = obj
    return acc
  }, {})

  var imageSet = images.nodes.reduce((acc, obj) => {
    var fileName = obj.Key.split("/")[1].split(".")[0]
    acc[fileName] = obj
    return acc
  }, {})

  return (
    <Layout seoTitle="DRAWINGS">
      <main className="info-pages" id="drawings">
        <section className="list-wrapper">
          {Object.keys(imageSet).map((fileName, idx) => (
            <div className="w-100 w-40-ns dib ma2 mr4">
              <figure>
                <Img
                  fluid={imageSet[fileName].childImageSharp.fluid}
                  alt={`drawings${idx}`}
                />
              </figure>
              <figcaption>
                {drawingInfo[fileName]
                  ? drawingInfo[fileName].data.TITLE
                  : fileName}
              </figcaption>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  )
}
