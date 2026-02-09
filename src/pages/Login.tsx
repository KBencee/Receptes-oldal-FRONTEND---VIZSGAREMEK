import { Link } from 'react-router-dom'
import styles from '../css/Login.module.css'
import { loginUser } from '../queryOptions/createRecipeQueryOption'
import HomeBtn from '../components/HomeBtn'

const Login = () => {
  return (
    <form className={styles.myForm}>
        <fieldset className={styles.login}>
            <HomeBtn/>
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
            <button className={styles.btn}>Belépés</button>
            <p>Ha még nincsen fiókod akkor&nbsp;<Link to="/signup">Regisztrálj</Link></p>
        </fieldset>
    </form>
  )
}

export default Login