import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Static from './pages/Static'

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Static page="dashboard" />} />
        <Route path="/characters" element={<Static page="characters" />} />
        <Route path="/character-builder" element={<Static page="characterBuilder" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
