import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "50px",
    adaptiveHeight: true,
    fade: true,
    cssEase: "linear",
  }
  return (
    <Slider {...settings}>
      {images.map(item => (
        <figure key={item.Key}>
          <GatsbyImage image={item.childImageSharp.gatsbyImageData} alt={item.Key} />
        </figure>
      ))}
    </Slider>
  );
}
