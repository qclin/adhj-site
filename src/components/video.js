import React, { useState, useRef } from "react"
import ReactPlayer from "react-player"

export default ({
  videoId,
  videoTitle,
  count = 1,
  isResearch = false,
  ...props
}) => {
  const flexLayout = count < 5 ? count : 4
  const styleEnum = {
    1: "full",
    2: "half",
    3: "third",
    4: "quarter",
  }

  const [playing, setPlaying] = useState(isResearch)
  const [mute, setMute] = useState(isResearch)
  const [volume, setVolume] = useState(1)
  const player = useRef()
  return (
    <div className={`${styleEnum[flexLayout]}-width ma0 dib video`}>
      <ReactPlayer
        url={`https://player.vimeo.com/video/${videoId}`}
        width="100%"
        height={`calc(70vh)`}
        playing={playing}
        muted={mute}
        volume={volume}
        loop
        ref={player}
      />
      <button
        onClick={() => setPlaying(!playing)}
        id="playButton"
        className="no-style playButton"
      >
        {playing ? <span>&#9616;&#9616;</span> : <span>&#x25b6;</span>}
      </button>
      <button
        onClick={() => {
          setMute(!mute)
          if (!mute) {
            setVolume(1)
          }
        }}
        id="muteButton"
        className="no-style muteButton"
      >
        {mute ? (
          <span aria-label="mute" role="img">
            &#128264;
          </span>
        ) : (
          <span aria-label="sound" role="img">
            &#128263;
          </span>
        )}
      </button>
    </div>
  )
}

// width={`calc(100vw/${flexLayout})`}
