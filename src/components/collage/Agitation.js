import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import remove from "lodash/remove"

import { ParallaxLayer } from "@react-spring/parallax"

const AgitationCanvas = ({ layers }) => {
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
          <GatsbyImage
            image={layer.childImageSharp.gatsbyImageData}
            objectPosition="0% 0%"
            alt={`Agitation ${index}`}
            className="collage-layer" />
        </ParallaxLayer>
      ))}
    </section>
  );
}

export default AgitationCanvas 