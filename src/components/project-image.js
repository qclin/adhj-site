import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProjectImage({ image, isResearch = false }) {
  const wrapperStyle = isResearch
    ? "w-25-ns pa2 dib image-figure"  
    : "w-60-ns margin-auto image-figure"

  return (
    <figure
      className={
        image.childImageSharp.gatsbyImageData.aspectRatio > 1
          ? "landscapes " + wrapperStyle
          : "portrait " + wrapperStyle
      }
    >
      <GatsbyImage image={image.childImageSharp.gatsbyImageData}

      alt={image.Key} />
    </figure>
  );
}
