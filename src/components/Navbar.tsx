import { useState } from 'react'
import { useLoginContext } from '../context/LoginContextProvider'
import MobileNavLinks from './MobileNavLinks'
import DesktopNavLinks from './DesktopNavLinks'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const menuItems = [
  {name: "Saját receptek", link: "/", active: true},
  {name: "Feltöltés", link: "/", active: false},
  {name: "Mentve", link: "/", active: false},
  {name: "Kezdőlap", link: "/", active: false},
]

const Navbar = () => {
    const { isLogin } = useLoginContext()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [isToggled, setIsToggled] = useState(true)

    const switchToMobile = () => {
      if(isMobile !== window.innerWidth < 768)
        setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", switchToMobile)

  return (
    <div className='navbar'>
        <p>Logo</p>

        <div>
          {isMobile && <button onClick={() => setIsToggled(!isToggled)}> {isToggled ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faX} />}</button>}
          <nav className={(isMobile ? "mobileNav" : "desktopNav") + " " + (isMobile ? isToggled ? "toggled" : "open" : "")} >
            {isMobile ? menuItems.map(x => <MobileNavLinks name={x.name} link={x.link} active={x.active}/>) : menuItems.map(x => <DesktopNavLinks name={x.name} link={x.link} active={x.active}/>)}
          </nav>
        </div>

        {!isLogin && <p style={{textAlign:"right"}}>Regisztrálj</p>}
        {isLogin && <p style={{textAlign:"right"}}>Kijelentkezés</p>}
    </div>
  )
}

export default Navbar