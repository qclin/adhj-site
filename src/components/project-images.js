import React from "react"
import Img from "gatsby-image"

export default function({ images, captions }) {
  return (
    <section className="center image-wrapper">
      {images.map(item => (
        <div className="w-60-ns margin-auto image-figure" key={item.Key}>
          <figure>
            <Img
              fluid={item.childImageSharp.fluid}
              alt={item.Key}
              key={item.Key}
            />
          </figure>
          <figcaption className="image-captions">
            {
              captions[
                item.Key.split("/")
                  .pop()
                  .split(".")[0]
              ]
            }
          </figcaption>
        </div>
      ))}
    </section>
  )
}
