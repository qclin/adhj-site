import React from "react"
const Video = ({ videoId, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0`}
      width="100%"
      height="100%"
      frameborder="0"
      title={videoTitle}
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
  </div>
)
export default Video
