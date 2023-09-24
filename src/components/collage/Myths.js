import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { ParallaxLayer } from "@react-spring/parallax"

const MythCanvas = ({ layers }) => {
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
          <GatsbyImage
            image={layer.childImageSharp.gatsbyImageData}
            objectPosition="0% 0%"
            alt={`Myth ${index}`}
            className="collage-layer" />
        </ParallaxLayer>
      ))}
      <ParallaxLayer offset={3}>
        <div className="relative h-100">
          {MYLights.map((_, index) => (
            <div className="animate-flicker myth-lights" key={`light-${index}`}></div>
          ))}
        </div>
      </ParallaxLayer>
    </section>
  );
}


export default MythCanvas