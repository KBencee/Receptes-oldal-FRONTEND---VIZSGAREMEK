import { useState } from 'react'
import MobileNavLinks from './MobileNavLinks'
import DesktopNavLinks from './DesktopNavLinks'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type linkType = {
  name: string,
  link: string,
  active: boolean
}

const menuItems = [
  {name: "Saját receptek", link: "/own", active: false},
  {name: "Feltöltés", link: "/upload", active: false},
  {name: "Mentve", link: "/saved", active: false},
  {name: "Kezdőlap", link: "/", active: true},
]

const NavMiddle = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [isToggled, setIsToggled] = useState(true)

    const switchToMobile = () => {
        if(isMobile !== window.innerWidth < 768)
            setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", switchToMobile)

  return (
    <div>
        {isMobile && <button onClick={() => setIsToggled(!isToggled)}> {isToggled ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faX} />}</button>}
        <nav className={(isMobile ? "mobileNav" : "desktopNav") + " " + (isMobile ? isToggled ? "toggled" : "open" : "")} >
            {isMobile ? <MobileNavLinks menuItems={menuItems}/> :  <DesktopNavLinks menuItems={menuItems}/>}
        </nav>
    </div>
  )
}

export default NavMiddle