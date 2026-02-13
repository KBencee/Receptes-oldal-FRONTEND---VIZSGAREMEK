import { Link } from 'react-router-dom'
import styles from '../css/Login.module.css'
import HomeBtn from '../components/HomeBtn'
import { useState } from 'react'
import { loginUser } from '..//services/publicAPI'

const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

  return (
    <div className={styles.myForm}>
        <fieldset className={styles.login}>
            <HomeBtn/>
            <h1>Belépés</h1>
            <label htmlFor="name">
                Felhasználónév<br/>
                <input type="text" id='name' required onChange={(e) => setUsername(e.target.value)}/><br/>
            </label>
            <label htmlFor="pass">
                Jelszó<br/>
                <input type="password" id='pass' required onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <p>
                <input type="checkbox"/> Emlékezz rám |&nbsp;
                <Link to="">Elfelejtett jelszó</Link>
            </p>
            <button className={styles.btn} onClick={() => {loginUser(username, password)}}>Belépés</button>
            <p>Ha még nincsen fiókod akkor&nbsp;<Link to="/signup">Regisztrálj</Link></p>
        </fieldset>
    </div>
  )
}

export default Login