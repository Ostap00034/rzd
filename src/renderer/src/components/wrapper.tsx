import { FC } from 'react'

interface IWrapperProps {
  children: React.ReactNode
  next: () => void
  prev: () => void
  canNext: boolean
  canPrev: boolean
}

const Wrapper: FC<IWrapperProps> = ({ children, next, prev, canNext, canPrev }) => {
  return (
    <div className="relative max-w-[50vw] bg-slate-600 flex flex-row justify-center items-center h-auto rounded-md">
      {canPrev ? (
        <img
          src="./prev.png"
          className="absolute z-30 bg-white p-3 rounded-full left-5 block w-8 cursor-pointer"
          onClick={() => {
            prev()
          }}
        />
      ) : null}
      {children}
      {canNext ? (
        <img
          src="./next.png"
          className="absolute z-30 bg-white p-3 rounded-full right-5 block w-8 cursor-pointer"
          onClick={() => {
            next()
          }}
        />
      ) : null}
    </div>
  )
}

export default Wrapper
