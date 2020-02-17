import React from "react"
import Img from "gatsby-image"

export default function({ images, isResearch = false }) {
  return (
    <section className="center">
      {images.map(item => (
        <div
          className={
            isResearch
              ? "w-25-ns pa2 fl image-figure"
              : "w-60-ns margin-auto image-figure"
          }
          key={item.Key}
        >
          <figure>
            <Img
              fluid={item.childImageSharp.fluid}
              alt={item.Key}
              key={item.Key}
            />
          </figure>
        </div>
      ))}
    </section>
  )
}
