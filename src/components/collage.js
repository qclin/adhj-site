import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Parallax } from "@react-spring/parallax"
import ASCanvas from "./collage/ArtificialStupidity"
import AGCanvas from "./collage/Agitation"
import ENCanvas from "./collage/Environment"
import MYCanvas from "./collage/Myths"
import TTCanvas from "./collage/TimeTravels"
import EXCanvas from "./collage/Existence"

const Collage = ({ canvas }) => {
  const { collage } = useStaticQuery(graphql`query collageQuery {
  collage: allS3ImageAsset(
    sort: {Key: DESC}
    filter: {Key: {regex: "/01_COLLAGE/"}}
  ) {
    nodes {
      Key
      childImageSharp {
        gatsbyImageData(sizes: "100", layout: FULL_WIDTH)
      }
      id
    }
  }
}`)

  var collageObj = groupByTheme(collage.nodes)

  return (
    <Parallax id="collage" ref={canvas} horizontal pages={6}>
      <ASCanvas layers={collageObj.AS} />
      <AGCanvas layers={collageObj.AG} />
      <ENCanvas layers={collageObj.EN} />
      <MYCanvas layers={collageObj.MY} />
      <TTCanvas layers={collageObj.TT} />
      <EXCanvas layers={collageObj.EX} />
    </Parallax>
  )
}

export default Collage; 

function groupByTheme(nodes) {
  return nodes.reduce((acc, obj) => {
    var themeKey = obj.Key.split("/")[1]
    if (!acc[themeKey]) {
      acc[themeKey] = []
    }
    acc[themeKey].push(obj)
    return acc
  }, {})
}

// NOTE 5 is bottom, 1 is very top
