import { Routes, Route } from 'react-router-dom'
import Main from './components/main'
import Start from './components/start'
import FileLoad from './components/fileload'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
      <Route path="/load" element={<FileLoad />} />
    </Routes>
  )
}

export default App
