import React from "react"
import Img from "gatsby-image"

export default function ProjectImage({ image, isResearch = false }) {
  const wrapperStyle = isResearch
    ? "w-25-ns pa2 dib image-figure"
    : "w-60-ns margin-auto image-figure"

  return (
    <figure
      className={
        image.childImageSharp.fluid.aspectRatio > 1
          ? "landscapes " + wrapperStyle
          : "portrait " + wrapperStyle
      }
    >
      <Img fluid={image.childImageSharp.fluid} alt={image.Key} />
    </figure>
  )
}
