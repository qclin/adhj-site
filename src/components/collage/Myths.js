import React from "react"
import Img from "gatsby-image"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  var MYLights = [...Array(10).keys()]

  return (
    <section id="MY-canvas">
      {layers.map((layer, index) => (
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
  )
}
