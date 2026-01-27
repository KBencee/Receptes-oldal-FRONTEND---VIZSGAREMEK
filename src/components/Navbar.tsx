import { useLoginContext } from '../context/LoginContextProvider'
import NavMiddle from './NavMiddle'

const Navbar = () => {
    const { isLogin } = useLoginContext()

  return (
    <div className='navbar'>
        <p>Logo</p>

        <NavMiddle/>

        {!isLogin && <p style={{textAlign:"right"}}>Regisztrálj</p>}
        {isLogin && <p style={{textAlign:"right"}}>Kijelentkezés</p>}
    </div>
  )
}

export default Navbar