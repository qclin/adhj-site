import React from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function({ canvas }) {
  const url = name => `"../../collage-layers/${name}.png`
  return (
    <Parallax id="collage" ref={canvas} horizontal pages={6}>
      <ParallaxLayer offset={0} speed={1} className="AS-canvas" />
      <ParallaxLayer offset={1} speed={1} className="AG-canvas" />
      <ParallaxLayer offset={2} speed={1} className="EN-canvas" />
      <ParallaxLayer offset={3} speed={1} className="MY-canvas" />
      <ParallaxLayer offset={4} speed={1} className="TT-canvas" />
      <ParallaxLayer offset={5} speed={1} className="EX-canvas" />

      <ParallaxLayer offset={2} speed={-0.3} className="canvas-layer">
        <img
          src={url("01_Environment")}
          alt="Environment layer 1"
          className=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.1} className="canvas-layer">
        <img
          src={url("02_Environment")}
          alt="Environment layer 2"
          className=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5} className="canvas-layer">
        <img src={url("03_Environment")} alt="Environment layer 3" />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={-0} className="canvas-layer">
        <img src={url("04_Environment")} alt="Environment layer 4" />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={-0.3} className="canvas-layer">
        <img src={url("01_Myth")} alt="Myth layer 1" className="" />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.1} className="canvas-layer">
        <img src={url("02_Myth")} alt="Myth layer 2" className="" />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5} className="canvas-layer">
        <img src={url("03_Myth")} alt="Myth layer 3" />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={-0} className="canvas-layer">
        <img src={url("04_Myth")} alt="Myth layer 4" />
      </ParallaxLayer>
    </Parallax>
  )
}
