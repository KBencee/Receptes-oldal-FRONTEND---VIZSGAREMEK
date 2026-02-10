import { useLoginContext } from '../context/LoginContextProvider'
import { Link } from 'react-router-dom'

const Profil = () => {
    const { isLogin } = useLoginContext()

  return (
    <div>
        {!isLogin && <Link to="/login" style={{textAlign:"right"}}>Bejelentkezés</Link>}
        {isLogin && <p style={{textAlign:"right"}}>Kijelentkezés</p>}
    </div>
  )
}

export default Profil