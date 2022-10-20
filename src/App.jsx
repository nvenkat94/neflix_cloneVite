import './App.scss'
import { Home, Login, Register, Watch } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="watch" element={<Watch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
