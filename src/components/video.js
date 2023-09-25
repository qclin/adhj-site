import React, { useState, useRef } from "react"
import ReactPlayer from "react-player"

const VideoPlayer = ({
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
  const [seek, setSeek] = useState(0)
  const [volume, setVolume] = useState(1)
  const player = useRef()
  return (
    <div className={`${styleEnum[flexLayout]}-width ma0 video`}>
      <ReactPlayer
        url={`https://player.vimeo.com/video/${videoId}`}
        width="100%"
        className="reactPlayer"
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
        {playing ? (
          <span>
            <img src="../../icons/Pause.png" alt="pause" />
          </span>
        ) : (
          <span>
            <img src="../../icons/Play.png" alt="play" />
          </span>
        )}
      </button>
      {playing && (
        <input
          id="scrub-bar"
          type="range"
          min="0"
          max="1"
          step="any"
          defaultValue={seek}
          onChange={e => {
            setSeek(e.target.value)
            player.current.seekTo(seek)
          }}
        />
      )}

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


export default VideoPlayer