import { useState } from 'react'
import MobileNavLinks from './MobileNavLinks'
import DesktopNavLinks from './DesktopNavLinks'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../css/Nav.module.css'
import { useMobileContext } from '../context/MobileContextProvider'

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
    const [isToggled, setIsToggled] = useState(true)
    const { isMobile } = useMobileContext()

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
        <nav className={(isMobile ? styles.mobileNav : styles.desktopNav) + " " + (isMobile ? isToggled ? styles.toggled : styles.open : "")} >
            {isMobile ? <MobileNavLinks setActive={setActive} menuItems={menuItems}/> :  <DesktopNavLinks setActive={setActive} menuItems={menuItems}/>}
        </nav>
    </div>
  )
}

export default NavMiddle