import React from "react"
const Video = ({ videoId, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0&title=0&sidedock=0&controls=0`}
      width="100%"
      height="100%"
      frameBorder="0"
      title={videoTitle}
    ></iframe>
  </div>
)
export default Video
