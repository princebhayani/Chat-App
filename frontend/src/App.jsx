import './App.css'
import Home from './pages/home/Home'
import {Navigate,Routes,Route} from "react-router-dom"
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './context/AuthContext'
// npm run server = backend
// npm run dev = frontend

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser?<Home />:<Navigate to="/login" /> } />
        <Route path='/login' element={authUser?<Navigate to="/" /> :<Login />} />
        <Route path='/signup' element={authUser?<Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;
