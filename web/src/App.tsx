import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
