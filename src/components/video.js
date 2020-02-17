import React from "react"
export default ({ videoId, videoTitle, count = 1, ...props }) => {
  var flexLayout = count < 5 ? count : 4

  return (
    <div className="video">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=0&loop=1&autopause=0&title=0&sidedock=0&controls=0`}
        style={{ width: `calc(100vw/${flexLayout})` }}
        frameBorder="0"
        title={videoTitle}
      ></iframe>
    </div>
  )
}
