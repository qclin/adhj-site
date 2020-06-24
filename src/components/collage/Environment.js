import React from "react"
import Img from "gatsby-image"
import { remove } from "lodash"

import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  const stump = remove(layers, layer => layer.Key.includes("ANIMATION"))
  return (
    <section id="EN-canvas">
      {layers.map((layer, index) => (
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
      <ParallaxLayer offset={2} speed={0}>
        <Img
          className="stump"
          fluid={stump[0].childImageSharp.fluid}
          objectPosition="0% 0%"
          alt={`Environment Sculpture`}
        />
      </ParallaxLayer>
    </section>
  )
}
