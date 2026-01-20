import React, { createContext, useContext, useState, type ReactNode } from 'react'

type RecipeContextType = {
    isLogin: boolean
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined)

const RecipeContextProvider = ({children}:{children: ReactNode}) => {
    const[isLogin, setIsLogin] = useState(false)
  return (
    <RecipeContext.Provider value={{isLogin}}>
        {children}
    </RecipeContext.Provider>
  )
}

export const useRecipeContext = () => {
    const context = useContext(RecipeContext)
    if (!context){
        throw new Error("No recipe context!")
    }
    return context
}

export default RecipeContextProvider