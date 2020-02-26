import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ canvas }) {
  const { collage } = useStaticQuery(graphql`
    query collageQuery {
      collage: allS3ImageAsset(
        sort: { order: DESC, fields: Key }
        filter: { Key: { regex: "/01_COLLAGE/" } }
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

  var collageObj = collage.nodes.reduce((acc, obj) => {
    var themeKey = obj.Key.split("/")[1]
    if (!acc[themeKey]) {
      acc[themeKey] = []
    }
    acc[themeKey].push(obj)
    return acc
  }, {})

  var AGLayers = collageObj.AG.filter(
    layer => !layer.Key.includes("Strawberries")
  )

  var AGStrawberries = collageObj.AG.filter(layer =>
    layer.Key.includes("Strawberries")
  )

  return (
    <Parallax id="collage" ref={canvas} horizontal pages={6}>
      <section id="AS-canvas">
        {collageObj.AS.map((layer, index) => (
          <ParallaxLayer
            offset={0}
            speed={index * 0.1}
            className="canvas-layer"
            key={`AS-${index}`}
          >
            <Img
              fluid={layer.childImageSharp.fluid}
              objectPosition="0% 0%"
              alt={`Artificial Stupidity ${index}`}
              className="collage-layer"
            />
          </ParallaxLayer>
        ))}
      </section>
      <section id="AG-canvas">
        {AGLayers.map((layer, index) => (
          <ParallaxLayer
            offset={1}
            speed={index * 0.1}
            className="canvas-layer"
            key={`AG-${index}`}
          >
            <Img
              fluid={layer.childImageSharp.fluid}
              objectPosition="0% 0%"
              alt={`Agitation ${index}`}
              className="collage-layer"
            />
          </ParallaxLayer>
        ))}
      </section>
      <section id="EN-canvas">
        {collageObj.EN.map((layer, index) => (
          <ParallaxLayer
            offset={2}
            speed={index * 0.1}
            className="canvas-layer"
            key={`EN-${index}`}
          >
            <Img
              fluid={layer.childImageSharp.fluid}
              objectPosition="0% 0%"
              alt={`Environment ${index}`}
              className="collage-layer"
            />
          </ParallaxLayer>
        ))}
      </section>

      <section id="MY-canvas">
        {collageObj.MY.map((layer, index) => (
          <ParallaxLayer
            offset={3}
            speed={index * 0.1}
            className="canvas-layer"
            key={`MY-${index}`}
          >
            <Img
              fluid={layer.childImageSharp.fluid}
              objectPosition="0% 0%"
              alt={`Myth ${index}`}
              className="collage-layer"
            />
          </ParallaxLayer>
        ))}
      </section>

      <section id="TT-canvas">
        {collageObj.TT.map((layer, index) => (
          <ParallaxLayer
            offset={4}
            speed={index * 0.1}
            className="canvas-layer"
            key={`TT-${index}`}
          >
            <Img
              fluid={layer.childImageSharp.fluid}
              objectPosition="0% 0%"
              alt={`Time Travels ${index}`}
              className="collage-layer"
            />
          </ParallaxLayer>
        ))}
      </section>
      <section id="EX-canvas">
        {collageObj.EX.map((layer, index) => (
          <ParallaxLayer
            offset={5}
            speed={index * 0.1}
            className="canvas-layer"
            key={`EX-${index}`}
          >
            <Img
              fluid={layer.childImageSharp.fluid}
              objectPosition="0% 0%"
              alt={`Existence ${index}`}
              className="collage-layer"
            />
          </ParallaxLayer>
        ))}
      </section>
    </Parallax>
  )
}

// NOTE 5 is bottom, 1 is very top
