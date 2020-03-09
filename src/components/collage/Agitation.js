import React from "react"
import Img from "gatsby-image"
import { remove } from "lodash"

import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  remove(layers, layer => layer.Key.includes("Strawberries"))

  return (
    <section id="AG-canvas">
      {layers.map((layer, index) => (
        <ParallaxLayer
          offset={1}
          speed={index * 0.1}
          className={"canvas-layer AG" + index}
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
  )
}
