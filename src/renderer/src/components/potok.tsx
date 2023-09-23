import { useNavigate } from 'react-router-dom'
const Potok = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-4">
      <form className="flex justify-center items-center w-full flex-col gap-3">
        <h1 className="text-3xl font-bold">Настройка потокового видео</h1>
        <div className="flex justify-start flex-col">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium">
            IP адрес камеры
          </label>
          <input
            type="text"
            id="first_name"
            className=" text-2xl rounded-lg bg-slate-100 w-[50vw] focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="____.___.__._"
            required
          />
        </div>

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

export default Potok
