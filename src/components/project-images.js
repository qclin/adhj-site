import React from "react"
import Img from "gatsby-image"

export default function({ images }) {
  return (
    <section className="center image-wrapper">
      {images.map(item => (
        <div className="w-60 margin-auto image-figure" key={item.Key}>
          <figure>
            <Img
              fluid={item.childImageSharp.fluid}
              alt={item.Key}
              key={item.Key}
            />
          </figure>
          <figcaption className="image-captions">{item.Key}</figcaption>
        </div>
      ))}
    </section>
  )
}
