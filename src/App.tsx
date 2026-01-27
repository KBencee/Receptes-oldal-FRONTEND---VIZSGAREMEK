import Home from './pages/Home'
import RecipeContextProvider from './context/LoginContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './pages/Upload'
import Saved from './pages/Saved'
import Own from './pages/Own'

const App = () => {
  return (
    <RecipeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/own' element={<Own/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/saved' element={<Saved/>}/>
        </Routes>
      </BrowserRouter>
    </RecipeContextProvider>
  )
}

export default App