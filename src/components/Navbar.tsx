import NavMiddle from './NavMiddle'
import styles from '../css/Nav.module.css'
import Profile from './Profile'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
        <div>Logo</div>
        <NavMiddle/>
        <Profile/>
    </div>
  )
}

export default Navbar