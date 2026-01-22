import Home from './pages/Home'

import RecipeContextProvider from './context/LoginContextProvider'

const App = () => {
  return (
    <RecipeContextProvider>
      <Home></Home>
    </RecipeContextProvider>
  )
}

export default App