import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import remove from "lodash/remove"

import { ParallaxLayer } from "@react-spring/parallax"

const ArtificialStupidityCanvas = ({ layers }) => {
  var ASJaws = remove(layers, layer => layer.Key.includes("Animation"))

  return (
    <section id="AS-canvas">
      {layers.map((layer, index) =>
        layer.Key.includes("02") ? (
          <JawLayers layers={ASJaws} />
        ) : (
          <ParallaxLayer
            offset={0}
            speed={index * 0.1}
            className="canvas-layer"
            key={`AS-${index}`}
          >
            <GatsbyImage
              image={layer.childImageSharp.gatsbyImageData}
              objectPosition="0% 0%"
              alt={`Artificial Stupidity ${index}`}
              className="collage-layer" />
          </ParallaxLayer>
        )
      )}
    </section>
  );
}

const JawLayers = ({ layers }) => {
  return layers.map((layer, index) => (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      className="jaws"
      key={`AS-animation-${index}`}
    >
      <GatsbyImage
        image={layer.childImageSharp.gatsbyImageData}
        objectPosition="0% 0%"
        alt={`Artificial Stupidity Jaws`}
        className="" />
    </ParallaxLayer>
  ));
}


export default ArtificialStupidityCanvas