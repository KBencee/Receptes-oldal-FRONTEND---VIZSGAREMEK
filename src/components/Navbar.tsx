import { useLoginContext } from '../context/LoginContextProvider'
import NavLinks from './NavLinks'
import ToggleBtn from './ToggleBtn'

const Navbar = () => {
    const { isLogin } = useLoginContext()
  return (
    <nav>
        <p>Logo</p>
        <NavLinks></NavLinks>
        {/* <ToggleBtn></ToggleBtn> */}
        {!isLogin && <p>Regisztrálj</p>}
        {isLogin && <p>Kijelentkezés</p>}
    </nav>
  )
}

export default Navbar