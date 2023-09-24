import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'

import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const FileLoad = () => {
  const navigate = useNavigate()
  const [fileNames, setFileNames] = useState<string[]>([])
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const files = e.target.files
    if (files) {
      setSelectedFiles(files)
      setFileNames(Array.from(files).map((file) => file.name))
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-4">
      <form className="flex justify-center items-center w-full flex-col gap-3">
        <h1 className="text-3xl font-bold">Загрузка видео</h1>

        <label
          htmlFor="fileInput"
          className="my-3 cursor-pointer font-medium bg-slate-100 p-5 rounded-md"
        >
          {fileNames.length === 0 ? 'Загрузите ваши видео' : `Выбрано файлов: ${fileNames.length}`}
        </label>
        <input
          type="file"
          multiple
          name="files"
          id="fileInput"
          className="my-3 w-[200px] hidden"
          onChange={(e) => handleFileChange(e)}
          required
        />
        <button
          id="saveButton"
          type="button" // Изменим type на 'button', так как это не форма
          onClick={(e) => {
            e.preventDefault()
            if (!selectedFiles) alert('Загрузите видео')
            else {
              console.log(selectedFiles)

              for (const file of selectedFiles) {
                const formData = new FormData()
                formData.append('video', file)
                axios
                  .post('http://localhost:5000/upload', formData)
                  .then((response) => {
                    navigate('/main?path=' + response.data)
                  })
                  .catch((error) => {
                    console.log('Error uploading file:', error)
                  })
              }
            }
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
        >
          Приступить к анализу
        </button>
      </form>
      <button
        type="button" // Изменим type на 'button', так как это не форма
        onClick={() => navigate('/')}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
      >
        Назад к выбору
      </button>
      <div id="fileList">
        <TailSpin
          height="80"
          width="80"
          color="#e15b64"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  )
}

export default FileLoad
