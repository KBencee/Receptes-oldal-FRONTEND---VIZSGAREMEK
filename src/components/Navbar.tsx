import NavMiddle from './NavMiddle'
import styles from '../css/Nav.module.css'
import Profil from './Profil'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
        <div>Logo</div>

        <NavMiddle/>
        <Profil/>
    </div>
  )
}

export default Navbar