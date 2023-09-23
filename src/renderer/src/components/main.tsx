import Chart from './chart'
import Wrapper from './wrapper'
import Statistic from './statistic'
import CircleChart from './circlechart'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const links = ['./1.mp4', './2.mp4', '3.mp4']

const timeStampToSeconds = (timeStamp: string) => {
  const parts = timeStamp.split(':')
  const minutes = parseInt(parts[0], 10) || 0
  const seconds = parseFloat(parts[1]) || 0

  return minutes * 60 + seconds
}

const Main = () => {
  const playerRef = useRef<ReactPlayer>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [canNext, setCanNext] = useState(true)
  const [canPrev, setCanPrev] = useState(false)

  useEffect(() => {
    if (currentVideoIndex == links.length - 1) setCanNext(false)
    else setCanNext(true)
    if (currentVideoIndex == 0) setCanPrev(false)
    else setCanPrev(true)
  }, [currentVideoIndex])

  const toTimeCode = (timeStamp: string) => {
    playerRef?.current?.seekTo(timeStampToSeconds(timeStamp))
  }

  const playNextVideo = () => {
    if (currentVideoIndex < links.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }

  const playPrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  return (
    <div className="flex flex-col gap-6 px-4 bg-white w-full min-h-screen justify-start items-center">
      <nav className="flex flex-row p-2 h-[80px] justify-center items-center w-full bg-[#fafffa]">
        <Link to="/">
          <img className="h-[70px]" src="./logo.png" alt="Логотип" />
        </Link>
      </nav>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-full flex flex-row justify-between items-center gap-6">
          <Wrapper canNext={canNext} canPrev={canPrev} prev={playPrevVideo} next={playNextVideo}>
            <ReactPlayer
              onEnded={playNextVideo}
              ref={playerRef}
              controls={true}
              url={links[currentVideoIndex]}
            />
          </Wrapper>

          <Statistic />
          <CircleChart />
        </div>

        <Chart toTimeCode={toTimeCode} />
      </div>
    </div>
  )
}

export default Main
