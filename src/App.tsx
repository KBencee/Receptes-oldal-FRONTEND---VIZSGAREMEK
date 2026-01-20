import React from 'react'
import Home from './pages/Home'
import RecipeContextProvider from './context/RecipeContextProvider'

const App = () => {
  return (
    <RecipeContextProvider>
      <Home></Home>
    </RecipeContextProvider>
  )
}

export default App