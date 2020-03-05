import React from "react"
import Img from "gatsby-image"
import { remove } from "lodash"

import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  const strawberries = remove(layers, layer =>
    layer.Key.includes("Strawberries")
  )
  const moreStrawberries = strawberries.concat(strawberries)

  return (
    <section id="AG-canvas">
      {layers.map((layer, index) => (
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
      {moreStrawberries.map((layer, index) => (
        <ParallaxLayer
          offset={1}
          speed={0.1}
          className="splatter"
          key={`AG-Strawberries-${index}`}
        >
          <Img
            fluid={layer.childImageSharp.fluid}
            objectPosition="0% 0%"
            alt={`Agitation Strawberries ${index}`}
            className="strawberries"
          />
        </ParallaxLayer>
      ))}
    </section>
  )
}
