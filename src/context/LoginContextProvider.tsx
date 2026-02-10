import { createContext, useContext, useState, type ReactNode } from 'react'

type LoginContextType = {
    isLogin: boolean
}

const LoginContext = createContext<LoginContextType | undefined>(undefined)

const LoginContextProvider = ({children}:{children: ReactNode}) => {
    const[isLogin, setIsLogin] = useState(false)
  return (
    <LoginContext.Provider value={{isLogin}}>
        {children}
    </LoginContext.Provider>
  )
}

export const useLoginContext = () => {
    const context = useContext(LoginContext)
    if (!context){
        throw new Error("No login context!")
    }
    return context
}

export default LoginContextProvider