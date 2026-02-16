import { useContext } from 'react'
import { useLoginContext } from '../context/LoginContextProvider'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../context/AuthenticatedUserContextProvider'

const Profil = () => {
    const { isLogin } = useLoginContext()
    const  authUser = useContext(AuthUserContext)
    console.log(authUser)
  return (
    <div>
        {!authUser ? <Link to="/login" style={{textAlign:"right"}}>Bejelentkezés</Link> : <img src={authUser.authUser.profileImageUrl ? authUser.authUser.profileImageUrl : "profile.webp"} alt={authUser.authUser.username} title={authUser.authUser.username}/>}
        {isLogin && <p style={{textAlign:"right"}}>Kijelentkezés</p>}
    </div>
  )
}

export default Profil