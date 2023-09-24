import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import remove from "lodash/remove"

import { ParallaxLayer } from "@react-spring/parallax"

const EnvironmentCanvas = ({ layers }) => {
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
          <GatsbyImage
            image={layer.childImageSharp.gatsbyImageData}
            objectPosition="0% 0%"
            alt={`Environment ${index}`}
            className="collage-layer" />
        </ParallaxLayer>
      ))}
      <ParallaxLayer offset={2} speed={0}>
        <GatsbyImage
          image={stump[0].childImageSharp.gatsbyImageData}
          className="stump"
          objectPosition="0% 0%"
          alt={`Environment Sculpture`} />
      </ParallaxLayer>
    </section>
  );
}


export default EnvironmentCanvas