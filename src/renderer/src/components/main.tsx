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
  const [path, setPath] = useState<string | null>('')
  const [path2, setPath2] = useState<string | null>('')

  useEffect(() => {
    // Получаем текущий URL

    if (window === undefined) return
    const currentUrl = window.location.search
    console.log(currentUrl)
    // Создаем объект URLSearchParams для извлечения параметров
    const urlSearchParams = new URLSearchParams(currentUrl)
    console.log(urlSearchParams)
    // Получаем значение параметра "path"
    const pathParam = urlSearchParams.get('path')
    setPath(pathParam)

    const jsonFilePath = '/json/' + pathParam?.split('.mp4')[0] + '_bad_activities.json'

    setPath2(jsonFilePath)

    console.log('Значение параметра "path":', pathParam)

    // Далее вы можете использовать значение pathParam в вашем компоненте
  }, [window])

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
            <ReactPlayer onEnded={playNextVideo} ref={playerRef} controls={true} url={path} />
          </Wrapper>

          <Statistic />
          <CircleChart />
        </div>

        <Chart toTimeCode={toTimeCode} data="" />
      </div>
    </div>
  )
}

export default Main
