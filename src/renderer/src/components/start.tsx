import { useState } from 'react'
import { Link } from 'react-router-dom'

import cn from 'clsx'

const Start = () => {
  const [isFile, setIsFile] = useState(true)

  return (
    <div className="flex w-full h-screen flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Выберите вариант работы</h1>
      <div className="flex flex-row gap-5 p-4">
        <button
          type="button"
          onClick={() => setIsFile(true)}
          className={cn(
            isFile ? 'bg-blue-800' : 'bg-blue-700',
            'text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none'
          )}
        >
          Загрузка видео
        </button>
        <button
          type="button"
          onClick={() => setIsFile(false)}
          className={cn(
            !isFile ? 'bg-blue-800' : 'bg-blue-700',
            'text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none'
          )}
        >
          Потоковое видео
        </button>
      </div>
      <Link to={isFile ? '/load' : '/potok'}>
        <button
          type="button"
          className={cn(
            'text-white bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none'
          )}
        >
          {isFile ? <>Приступить к загрузке</> : <>Приступить к настройке</>}
        </button>
      </Link>
    </div>
  )
}

export default Start
