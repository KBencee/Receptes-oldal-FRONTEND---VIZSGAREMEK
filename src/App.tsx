import Home from './pages/Home'

import RecipeContextProvider from './context/LoginContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <RecipeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </RecipeContextProvider>
  )
}

export default App