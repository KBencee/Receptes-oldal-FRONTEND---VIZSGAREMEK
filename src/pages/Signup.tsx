import { Link } from 'react-router-dom'
import styles from '../css/Login.module.css'

const Signup = () => {
  return (
    <form className={styles.myForm}>
        <fieldset className={styles.login}>
            <h1>Regisztáció</h1>
            <label htmlFor="name">
                Felhasználónév<br/>
                <input type="text" id='name' required/><br/>
            </label>
            <label htmlFor="email">
                E-mail<br/>
                <input type="email" id='email' required/><br/>
            </label>            
            <label htmlFor="pass">
                Jelszó<br/>
                <input type="password" id='pass' required/>
            </label>
            <input className={styles.btn} type="submit" value="Regisztráció"/>
            <p>Ha már van fiókod akkor&nbsp;<Link to="/login">Lépj be</Link></p>
        </fieldset>
    </form>
  )
}

export default Signup