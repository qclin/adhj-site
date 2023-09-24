import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import remove from "lodash/remove"

import { ParallaxLayer } from "@react-spring/parallax"

const TimeTravelCanvas = ({ layers })  => {
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
          <GatsbyImage
            image={layer.childImageSharp.gatsbyImageData}
            objectPosition="0% 0%"
            alt={`Time Travels ${index}`}
            className="collage-layer" />
        </ParallaxLayer>
      ))}
      <ParallaxLayer offset={4} speed={0}>
        <GatsbyImage
          image={crystal[0].childImageSharp.gatsbyImageData}
          className="crystal"
          objectPosition="0% 0%"
          alt={`Time Travels crystal`} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={4}
        className="canvas-layer"
        key="TT-top-layer"
      >
        <GatsbyImage
          image={topLayer[0].childImageSharp.gatsbyImageData}
          objectPosition="0% 0%"
          alt="Time Travels"
          className="collage-layer" />
      </ParallaxLayer>
    </section>
  );
}


export default TimeTravelCanvas