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
        {!authUser ? <Link to="/login" style={{textAlign:"right"}}>Bejelentkezés</Link> : <p>{authUser.authUser.username}</p>}
        {isLogin && <p style={{textAlign:"right"}}>Kijelentkezés</p>}
    </div>
  )
}

export default Profil