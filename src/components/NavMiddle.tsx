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
    {name: "Kezdőlap", link: "/", active: true},
    {name: "Saját receptek", link: "/own", active: false},
    {name: "Feltöltés", link: "/upload", active: false},
    {name: "Mentve", link: "/saved", active: false},
]

const NavMiddle = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [isToggled, setIsToggled] = useState(true)

    const switchToMobile = () => {
        if(isMobile !== window.innerWidth < 768)
            setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", switchToMobile)

    const setActive = (activeItem:string) => {
        menuItems.forEach(e => {
            e.active = false
            if (e.name == activeItem)
                e.active = true
        });
    }

  return (
    <div>
        {isMobile && <button onClick={() => setIsToggled(!isToggled)}> {isToggled ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faX} />}</button>}
        <nav className={(isMobile ? "mobileNav" : "desktopNav") + " " + (isMobile ? isToggled ? "toggled" : "open" : "")} >
            {isMobile ? <MobileNavLinks setActive={setActive} menuItems={menuItems}/> :  <DesktopNavLinks setActive={setActive} menuItems={menuItems}/>}
        </nav>
    </div>
  )
}

export default NavMiddle