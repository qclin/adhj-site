import React from "react"
import Img from "gatsby-image"

import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  var ENLayer = layers

  return (
    <section id="EN-canvas">
      {ENLayer.map((layer, index) => (
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
  )
}
