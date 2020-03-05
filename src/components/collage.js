import React from "react"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"
import ASCanvas from "./collage/ArtificialStupidity"
import AGCanvas from "./collage/Agitation"
import ENCanvas from "./collage/Environment"

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

  var collageObj = groupByTheme(collage.nodes)
  var MYLights = [...Array(10).keys()]

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <Parallax id="collage" ref={canvas} horizontal pages={6}>
      <ASCanvas layers={collageObj.AS} />
      <AGCanvas layers={collageObj.AG} />
      <ENCanvas layers={collageObj.EN} />

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
        <ParallaxLayer offset={3}>
          <div className="relative h-100">
            {MYLights.map(item => (
              <div className="animate-flicker myth-lights"></div>
            ))}
          </div>
        </ParallaxLayer>
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

function groupByTheme(nodes) {
  return nodes.reduce((acc, obj) => {
    var themeKey = obj.Key.split("/")[1]
    if (!acc[themeKey]) {
      acc[themeKey] = []
    }
    acc[themeKey].push(obj)
    return acc
  }, {})
}

// NOTE 5 is bottom, 1 is very top
