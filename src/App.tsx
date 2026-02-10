import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './pages/Upload'
import Saved from './pages/Saved'
import Own from './pages/Own'
import Login from './pages/Login'
import LoginContextProvider from './context/LoginContextProvider'
import MobileContextProvider from './context/MobileContextProvider'
import Signup from './pages/Signup'
import ForYou from './pages/ForYou'
import ContentUpload_ from './pages/ContentUpload_'

const App = () => {
  return (
    <LoginContextProvider>
    <MobileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/own' element={<Own/>}/>
          <Route path='/upload' element={<ContentUpload_/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/foryou' element={<ForYou/>}/>
        </Routes>
      </BrowserRouter>
    </MobileContextProvider>
    </LoginContextProvider>
  )
}

export default App