import { Link } from 'react-router-dom'
import { useMobileContext } from '../context/MobileContextProvider'
import styles from '../css/Login.module.css'

const Login = () => {
    const { isMobile } = useMobileContext()
  return (
    <form className={styles.myForm}>
        <fieldset className={isMobile ? `${styles.login} ${styles.mobileLogin}` : styles.login}>
            <h1>Belépés</h1>
            <label htmlFor="name">
                Felhasználónév<br/>
                <input type="text" id='name'/><br/>
            </label>
            <label htmlFor="pass">
                Jelszó<br/>
                <input type="password" id='pass'/>
            </label>
            <p>
                <input type="checkbox"/> Emlékezz rám &nbsp;
                <Link to="">Elfelejtett jelszó</Link>
            </p>
            <input className={styles.btn} type="submit" value="Belépés"/>
            <p>Ha még nincsen fiókod akkor &nbsp; <Link to="/signup"> Regisztrálj</Link></p>
        </fieldset>
    </form>
  )
}

export default Login