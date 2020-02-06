import React, { useRef } from "react"
import { Stage, Layer, Image, Text } from "react-konva"
import Konva from "konva"
import useImage from "use-image"

export default function() {
  const [layer1] = useImage("../../Collage_01/01_Environment_101219.png")
  const [layer2] = useImage("../../Collage_01/02_Environment_101219.png")
  const [layer3] = useImage("../../Collage_01/03_Environment_101219.png")
  const [layer4] = useImage("../../Collage_01/04_Environment_101219.png")

  const baseLayer = useRef(null)
  const secondLayer = useRef(null)
  const thirdLayer = useRef(null)
  const fourthLayer = useRef(null)

  var anim = new Konva.Animation(frame => {
    secondLayer.y((Math.sin(frame.time / 10) + 1) / 2)
  })

  anim.start()

  return (
    <Stage width="3177" height="1742">
      <Layer>
        <Text text="Try click on rect" />
        <Image image={layer1} ref={baseLayer} />
        <Image image={layer2} ref={secondLayer} />
        <Image image={layer3} ref={thirdLayer} />
        <Image image={layer4} ref={fourthLayer} />
      </Layer>
    </Stage>
  )
}
