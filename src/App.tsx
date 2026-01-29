import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './pages/Upload'
import Saved from './pages/Saved'
import Own from './pages/Own'
import Login from './pages/Login'
import LoginContextProvider from './context/LoginContextProvider'
import MobileContextProvider from './context/MobileContextProvider'

const App = () => {
  return (
    <LoginContextProvider>
    <MobileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/own' element={<Own/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </MobileContextProvider>
    </LoginContextProvider>
  )
}

export default App