import React from "react"
import Img from "gatsby-image"

import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  var AGLayers = layers.filter(layer => !layer.Key.includes("Strawberries"))

  var AGStrawberries = layers.filter(layer =>
    layer.Key.includes("Strawberries")
  )

  return (
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
      {AGStrawberries.map((layer, index) => (
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
