import React from "react"
import Img from "gatsby-image"
import Carousel from "../components/carousel"
import { mergeTwo } from "../utils/helpers"

export default function ProjectImages({ images, isResearch = false }) {
  const hasSeries = images.some(item => item.Key.includes("series"))
  const wrapperStyle = isResearch
    ? "w-25-ns pa2 dib image-figure"
    : "w-60-ns margin-auto image-figure"

  if (isResearch || !hasSeries) {
    return (
      <section className="center">
        {images.map(item => (
          <figure key={item.Key} className={wrapperStyle}>
            <Img fluid={item.childImageSharp.fluid} alt={item.Key} />
          </figure>
        ))}
      </section>
    )
  }

  const {
    groupBySeries,
    seriesNames,
    singleImages,
    singleNames,
  } = sortAndGroup(images)
  const imagesByKey = toObj(singleImages)
  const sortedList = mergeTwo(singleNames, seriesNames)

  return (
    <>
      {sortedList.map(fileName =>
        fileName.includes(".") ? (
          <section className="center">
            <figure key={fileName} className={wrapperStyle}>
              <Img
                fluid={imagesByKey[fileName].childImageSharp.fluid}
                alt={fileName}
              />
            </figure>
          </section>
        ) : (
          <section className="center">
            <Carousel images={groupBySeries[fileName]} />
          </section>
        )
      )}
    </>
  )
}

function sortAndGroup(array) {
  var groupBySeries = {}
  array.forEach((item, index, object) => {
    if (item.Key.includes("series")) {
      var fileName = item.Key.split("/").pop()
      var seriesName = fileName.split("_series")[0]
      if (groupBySeries[seriesName] == null) {
        groupBySeries[seriesName] = []
      }
      groupBySeries[seriesName].push(item)
    }
  })
  const seriesNames = Object.keys(groupBySeries)

  const singleImages = array.filter(item => !item.Key.includes("series"))
  const singleNames = singleImages.map(item => item.Key.split("/").pop())

  return { groupBySeries, seriesNames, singleImages, singleNames }
}

function toObj(array) {
  const byKeyValue = {}

  return array.reduce((obj, item) => {
    const fileName = item.Key.split("/").pop()
    return {
      ...obj,
      [fileName]: item,
    }
  }, byKeyValue)
}
