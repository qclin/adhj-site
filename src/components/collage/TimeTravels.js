import React from "react"
import Img from "gatsby-image"
import { remove } from "lodash"

import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  return (
    <section id="TT-canvas">
      {layers.map((layer, index) => (
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
  )
}
