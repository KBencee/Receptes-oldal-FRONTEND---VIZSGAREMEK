import Home from './pages/Home'

import RecipeContextProvider from './context/LoginContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './pages/Upload'

const App = () => {
  return (
    <RecipeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/upload' element={<Upload/>}/>
        </Routes>
      </BrowserRouter>
    </RecipeContextProvider>
  )
}

export default App