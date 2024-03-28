import './App.css'
import Home from './pages/home/Home'
import {Routes,Route} from "react-router-dom"
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import {Toaster} from "react-hot-toast"
// npm run server = backend
// npm run dev = frontend

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
