import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Parallax } from "react-spring/renderprops-addons.cjs"
import ASCanvas from "./collage/ArtificialStupidity"
import AGCanvas from "./collage/Agitation"
import ENCanvas from "./collage/Environment"
import MYCanvas from "./collage/Myths"
import TTCanvas from "./collage/TimeTravels"
import EXCanvas from "./collage/Existence"

export default function({ canvas }) {
  const { collage } = useStaticQuery(graphql`
    query collageQuery {
      collage: allS3ImageAsset(
        sort: { order: DESC, fields: Key }
        filter: { Key: { regex: "/01_COLLAGE/" } }
      ) {
        nodes {
          Key
          childImageSharp {
            fluid(sizes: "100") {
              src
              srcSet
              aspectRatio
              sizes
            }
          }
          id
        }
      }
    }
  `)

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
