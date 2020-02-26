import React, { useRef, useEffect, useState } from "react"
import ReactPlayer from "react-player"

export default ({
  videoId,
  videoTitle,
  count = 1,
  isResearch = false,
  ...props
}) => {
  const flexLayout = count < 5 ? count : 4
  const [playing, setPlaying] = useState(isResearch)
  const [mute, setMute] = useState(false)

  return (
    <div className="video" style={{ width: `calc(100vw/${flexLayout})` }}>
      <ReactPlayer
        url={`https://vimeo.com/${videoId}`}
        width="100%"
        height={`calc(70vh)`}
        playing={playing}
        muted={mute}
      />
      <button
        onClick={() => setPlaying(!playing)}
        id="playButton"
        className="no-style playButton"
      >
        {playing ? <span>&#9616;&#9616;</span> : <span>&#x25b6;</span>}
      </button>
      <button
        onClick={() => setMute(!mute)}
        id="muteButton"
        className="no-style muteButton"
      >
        {mute ? <span>&#128263;</span> : <span>&#128264;</span>}
      </button>
    </div>
  )
}

// width={`calc(100vw/${flexLayout})`}
