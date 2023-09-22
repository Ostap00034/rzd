import { useRef } from 'react'
import ReactPlayer from 'react-player'
import Chart from './components/chart'

const timeStampToSeconds = (timeStamp: string) => {
  const parts = timeStamp.split(':')
  const hours = parseInt(parts[0], 10) || 0
  const minutes = parseInt(parts[1], 10) || 0
  const seconds = parseFloat(parts[2]) || 0

  return hours * 3600 + minutes * 60 + seconds
}

function App(): JSX.Element {
  const playerRef = useRef<ReactPlayer>(null)

  const toTimeCode = (timeStamp: string) => {
    playerRef?.current?.seekTo(timeStampToSeconds(timeStamp))
  }

  return (
    <div className="flex flex-col gap-6 p-4 bg-white w-full min-h-screen justify-center items-center">
      <img className="h-[200px]" src="./logo.png" />
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <ReactPlayer ref={playerRef} controls={true} width="60vw" height="auto" url="./video.mp4" />
        <Chart toTimeCode={toTimeCode} />
      </div>
    </div>
  )
}

export default App
