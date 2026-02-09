import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { menuItems, setActive } from '../components/NavMiddle'
import { Navigate, useNavigate } from 'react-router-dom'
import styles from '../css/Login.module.css'


const HomeBtn = () => {
    const navigate = useNavigate()
    

    const goToHome = () => {
        navigate("/")
        setActive(menuItems[0].name)
    }

  return (
    <button className={styles.homeBtn} onClick={() => goToHome()}><FontAwesomeIcon icon={faHouse} /></button>
  )
}

export default HomeBtn