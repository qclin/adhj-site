import React from "react"
import Img from "gatsby-image"
import { remove } from "lodash"

import { ParallaxLayer } from "@react-spring/parallax"

export default function({ layers }) {
  const crystal = remove(layers, layer => layer.Key.includes("ANIMATION"))
  const topLayer = remove(layers, layer => layer.Key.includes("02_TT"))

  console.log(layers, crystal)
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
      <ParallaxLayer offset={4} speed={0}>
        <Img
          className="crystal"
          fluid={crystal[0].childImageSharp.fluid}
          objectPosition="0% 0%"
          alt={`Time Travels crystal`}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={4}
        className="canvas-layer"
        key="TT-top-layer"
      >
        <Img
          fluid={topLayer[0].childImageSharp.fluid}
          objectPosition="0% 0%"
          alt="Time Travels"
          className="collage-layer"
        />
      </ParallaxLayer>
    </section>
  )
}
