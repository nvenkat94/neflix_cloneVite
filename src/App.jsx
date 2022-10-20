import './App.scss'
import Home from './pages/home/Home'
import Layout from './components/layout/layout'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Layout/> */}
      {/* <Watch/> */}
      <Register/>
      <Login/>
    </div>
  )
}

export default App
