import { Link, useNavigate } from 'react-router-dom'
import styles from '../css/Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { menuItems, setActive } from '../components/NavMiddle'

const Login = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
        setActive(menuItems[0].name)
    }

  return (
    <form className={styles.myForm}>
        <fieldset className={styles.login}>
            <button onClick={() => goToHome()}><FontAwesomeIcon icon={faHouse} /></button>
            <h1>Belépés</h1>
            <label htmlFor="name">
                Felhasználónév<br/>
                <input type="text" id='name' required/><br/>
            </label>
            <label htmlFor="pass">
                Jelszó<br/>
                <input type="password" id='pass' required/>
            </label>
            <p>
                <input type="checkbox"/> Emlékezz rám |&nbsp;
                <Link to="">Elfelejtett jelszó</Link>
            </p>
            <input className={styles.btn} type="submit" value="Belépés"/>
            <p>Ha még nincsen fiókod akkor&nbsp;<Link to="/signup">Regisztrálj</Link></p>
        </fieldset>
    </form>
  )
}

export default Login