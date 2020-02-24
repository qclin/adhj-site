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
      <section>
        <ParallaxLayer offset={0} speed={-0.3} className="canvas-layer">
          <img src={url("AS/05_AS")} alt="Artificial Stupidity 1" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1} className="canvas-layer">
          <img src={url("AS/04_AS")} alt="Artificial Stupidity 2" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} className="canvas-layer">
          <img src={url("AS/03_AS")} alt="Artificial Stupidity 3" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.2} className="canvas-layer">
          <img src={url("AS/02_AS")} alt="Artificial Stupidity 4" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0} className="canvas-layer">
          <img src={url("AS/01_AS")} alt="Artificial Stupidity 5" />
        </ParallaxLayer>
      </section>

      <section>
        <ParallaxLayer offset={1} speed={-0} className="canvas-layer">
          <img src={url("AG/05_AG")} alt="Agitation layer 4" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} className="canvas-layer">
          <img src={url("AG/04_AG")} alt="Agitation layer 3" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} className="canvas-layer">
          <img src={url("AG/03_AG")} alt="Agitation layer 2" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={-0.3} className="canvas-layer">
          <img src={url("AG/02_AG")} alt="Agitation layer 1" />
        </ParallaxLayer>
      </section>

      <section>
        <ParallaxLayer offset={2} speed={-0.3} className="canvas-layer">
          <img src={url("EN/05_EN")} alt="Environment 1" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} className="canvas-layer">
          <img src={url("EN/04_EN")} alt="Environment 2" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} className="canvas-layer">
          <img src={url("EN/03_EN")} alt="Environment 3" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={-0.2} className="canvas-layer">
          <img src={url("EN/02_EN")} alt="Environment 4" />
        </ParallaxLayer>
      </section>

      <section>
        <ParallaxLayer offset={3} speed={-0.3} className="canvas-layer">
          <img src={url("MY/05_MY")} alt="Myth 1" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.1} className="canvas-layer">
          <img src={url("MY/04_MY")} alt="Myth 2" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} className="canvas-layer">
          <img src={url("MY/03_MY")} alt="Myth 3" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-0.2} className="canvas-layer">
          <img src={url("MY/02_MY")} alt="Myth 4" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0} className="canvas-layer">
          <img src={url("MY/01_MY_Animation")} alt="Myth 5" />
        </ParallaxLayer>
      </section>

      <section>
        <ParallaxLayer offset={4} speed={-0.3} className="canvas-layer">
          <img src={url("TT/05_TT")} alt="Time Travels 1" />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.1} className="canvas-layer">
          <img src={url("TT/04_TT")} alt="Time Travels 2" />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5} className="canvas-layer">
          <img src={url("TT/03_TT")} alt="Time Travels 3" />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={-0} className="canvas-layer">
          <img src={url("TT/02_TT")} alt="Time Travels 4" />
        </ParallaxLayer>
      </section>

      <section>
        <ParallaxLayer offset={5} speed={-0.3} className="canvas-layer">
          <img src={url("EX/05_EX")} alt="Existence 1" />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.1} className="canvas-layer">
          <img src={url("EX/04_EX")} alt="Existence 2" />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.5} className="canvas-layer">
          <img src={url("EX/03_EX")} alt="Existence 3" />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0} className="canvas-layer">
          <img src={url("EX/02_EX")} alt="Existence 4" />
        </ParallaxLayer>
      </section>
    </Parallax>
  )
}

// NOTE 5 is bottom, 1 is very top
