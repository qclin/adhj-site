import React from "react"
import Img from "gatsby-image"
import { remove } from "lodash"
import germanHeartGIF from "./exGermanHeart.gif"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ layers }) {
  return (
    <section id="EX-canvas">
      {layers.map((layer, index) => (
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
      <ParallaxLayer offset={5} speed={0.1} className="" key="german-heart">
        <img
          id="myGermanHeart"
          src={germanHeartGIF}
          alt="my german heart beating"
        />
      </ParallaxLayer>
    </section>
  )
}
