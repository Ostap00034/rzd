import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const FileLoad = () => {
  const navigate = useNavigate()
  const [fileNames, setFileNames] = useState<string[]>([])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (selectedFiles) {
      const names = Array.from(selectedFiles).map((file) => file.name)
      setFileNames(names)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-4">
      <form className="flex justify-center items-center w-full flex-col gap-3">
        <h1 className="text-3xl font-bold">Загрузка видео</h1>

        <label
          htmlFor="files"
          className="my-3 cursor-pointer font-medium bg-slate-100 p-5 rounded-md"
        >
          {fileNames.length === 0 ? 'Загрузите ваши видео' : `Выбрано файлов: ${fileNames.length}`}
        </label>
        <input
          type="file"
          multiple
          name="files"
          id="files"
          className="my-3 w-[200px] hidden"
          onChange={handleFileChange}
          required
        />
        <button
          type="submit"
          onClick={() => {
            navigate('/main')
          }}
          className={
            'text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none'
          }
        >
          Приступить к анализу
        </button>
      </form>
      <button
        type="submit"
        onClick={() => {
          navigate('/')
        }}
        className={
          'text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none'
        }
      >
        Назад к выбору
      </button>
    </div>
  )
}

export default FileLoad
