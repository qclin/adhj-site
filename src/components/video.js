import React from "react"
const Video = ({ videoId, videoTitle, count, ...props }) => (
  <div className="video">
    <div className="background">...loading</div>
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0&title=0&sidedock=0&controls=0`}
      style={{ width: `calc(100vw/${count})` }}
      frameBorder="0"
      title={videoTitle}
    ></iframe>
  </div>
)
export default Video
