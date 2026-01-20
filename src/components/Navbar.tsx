import React from 'react'
import { useRecipeContext } from '../context/RecipeContextProvider'

const Navbar = () => {
    const { isLogin } = useRecipeContext()
  return (
    <nav>
        {/* TODO: Logo */}
        <p>Logo</p>
        <ul>
            <li><a href="">Saját receptek</a></li>
            <li><a href="">Feltöltés</a></li>
            <li><a href="">Mentve</a></li>
            <li><a href="">Kezdőlap</a></li>
        </ul>
        {/* TODO: Bejelentkezés/Regisztráció */}
        {!isLogin && <p>Regisztrálj</p>}
        {isLogin && <p>Kijelentkezés</p>}
    </nav>
  )
}

export default Navbar