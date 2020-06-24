import React from "react"
import Carousel from "./carousel"
import { mergeTwo } from "../utils/helpers"
import ProjectImage from "./project-image"
export default function ProjectImages({
  images,
  captions,
  isResearch = false,
}) {
  const hasSeries = images.some(item => item.Key.includes("series"))
  if (isResearch || !hasSeries) {
    return (
      <section className="center">
        {images.map(item => (
          <ProjectImage image={item} key={item.Key} isResearch={isResearch} />
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
          <ProjectImage image={imagesByKey[fileName]} key={fileName} />
        ) : (
          <section
            className="center mv3 w-60-ns image-wrapper carousel"
            key={fileName}
          >
            <Carousel images={groupBySeries[fileName]} />
            {captions && captions[fileName] && (
              <figcaption className="mv3">
                {captions[fileName].CAPTION}
              </figcaption>
            )}
          </section>
        )
      )}
    </>
  )
}

function sortAndGroup(array) {
  var groupBySeries = array.reduce((acc, obj) => {
    var fileName = obj.Key.split("/").pop()
    if (fileName.includes("_series")) {
      var seriesName = fileName.split("_series")[0]
      if (!acc[seriesName]) {
        acc[seriesName] = []
      }
      acc[seriesName].push(obj)
    }
    return acc
  }, {})

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
