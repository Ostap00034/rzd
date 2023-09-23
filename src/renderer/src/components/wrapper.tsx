import { FC } from 'react'

interface IWrapperProps {
  children: React.ReactNode
  next: () => void
  prev: () => void
  canNext: any
  canPrev: any
}

const Wrapper: FC<IWrapperProps> = ({ children, next, prev, canNext, canPrev }) => {
  return (
    <div className="relative w-[50vw] flex flex-row justify-center items-center h-auto rounded-md">
      {canPrev ? (
        <img
          src="./prev.png"
          className="absolute left-5 block w-6 cursor-pointer"
          onClick={() => {
            prev()
          }}
        />
      ) : null}
      {children}
      {canNext ? (
        <img
          src="./next.png"
          className="absolute right-5 block w-6 cursor-pointer"
          onClick={() => {
            next()
          }}
        />
      ) : null}
    </div>
  )
}

export default Wrapper
