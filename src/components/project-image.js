import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import clsx from 'clsx'; 

const  ProjectImage = ({ image, isResearch = false }) => {
  const wrapperStyle = isResearch
    ? "w-25-ns pa2 dib image-figure"  
    : "w-60-ns margin-auto image-figure"
  
  return (
    <figure
      className={
        clsx(image.childImageSharp.gatsbyImageData.height > 1 && "portrait", wrapperStyle)
      }
    >
      <GatsbyImage image={image.childImageSharp.gatsbyImageData}

      alt={image.Key} />
    </figure>
  );
}

export default ProjectImage