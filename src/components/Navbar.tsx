import { useLoginContext } from '../context/LoginContextProvider'
import NavMiddle from './NavMiddle'
import styles from '../css/Nav.module.css'

const Navbar = () => {
    const { isLogin } = useLoginContext()

  return (
    <div className={styles.navbar}>
        <p>Logo</p>

        <NavMiddle/>

        {!isLogin && <p style={{textAlign:"right"}}>Regisztrálj</p>}
        {isLogin && <p style={{textAlign:"right"}}>Kijelentkezés</p>}
    </div>
  )
}

export default Navbar