import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "50px",
    adaptiveHeight: true,
  }

  return (
    <div className="w-60-ns image-wrapper carousel">
      <Slider {...settings}>
        {images.map(item => (
          <figure>
            <Img fluid={item.childImageSharp.fluid} alt={item.Key} />
          </figure>
        ))}
      </Slider>
    </div>
  )
}
