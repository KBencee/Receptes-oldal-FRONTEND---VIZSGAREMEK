import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../context/AuthenticatedUserContextProvider'
import styles from '../css/Profile.module.css'

const Profile = () => {
    const authUser = useContext(AuthUserContext)
	const logout = () => {
		localStorage.clear()
		window.location.reload()
	} 

  return (
    <div className={styles.profile}>
		{authUser && <button className={styles.btn} onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>}
        {!authUser ? 
        	<Link to="/login" style={{textAlign:"right"}}>Bejelentkezés</Link> 
			: 
			<img src={authUser.authUser.profileImageUrl ? 
				authUser.authUser.profileImageUrl 
				: 
				"profile.webp"} 
				alt={authUser.authUser.username} title={authUser.authUser.username}
			/>}
    </div>
  )
}

export default Profile