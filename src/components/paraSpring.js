import React, { useRef } from "react"
import ReactDOM from "react-dom"
import { Spring } from "react-spring/renderprops"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"

export default function() {
  const url = name => `"../../Collage_01/${name}_Environment_101219.png`
  const parallax = useRef(null)
  return (
    <Parallax id="collage" ref={parallax} horizontal pages={3}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ border: "#06ff12 solid 2rem" }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ border: "#ff35bb solid 2rem" }}
      />
      <ParallaxLayer
        offset={2}
        speed={-0.3}
        style={{
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundImage: url("01", true),
        }}
      />

      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.scrollTo(1)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={url("02")} alt="Collage layer 1" style={{ height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.scrollTo(2)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={url("03")} alt="Collage layer 2" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={-0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => parallax.scrollTo(0)}
      >
        <img src={url("04")} alt="Collage layer 2" />
      </ParallaxLayer>
    </Parallax>
  )
}
