import { timeStamp } from 'console'
import { useRef, useCallback, useState } from 'react'
import ReactPlayer from 'react-player'

function App(): JSX.Element {
  const playerRef = useRef<ReactPlayer>() || null

  const timeStampToSeconds = (timeStamp: string) => {
    const parts = timeStamp.split(':')
    const hours = parseInt(parts[0], 10) || 0
    const minutes = parseInt(parts[1], 10) || 0
    const seconds = parseFloat(parts[2]) || 0

    return hours * 3600 + minutes * 60 + seconds
  }

  return (
    <div className="flex bg-slate-500 w-full h-screen justify-center items-center flex-col">
      <ReactPlayer ref={playerRef} controls={true} width={400} height={200} url="./video.mp4" />
      <button
        className="p-3 bg-zinc-500 rounded-sm"
        onClick={() => {
          playerRef.current?.seekTo(timeStampToSeconds('0:1:35'))
        }}
      >
        1:35
      </button>
      <button
        className="p-3 bg-zinc-500 rounded-sm"
        onClick={() => {
          playerRef.current?.seekTo(timeStampToSeconds('0:2:34'))
        }}
      >
        2:34
      </button>
    </div>
  )
}

export default App
