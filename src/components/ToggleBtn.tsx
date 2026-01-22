import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNavLinks from './MobileNavLinks'

const ToggleBtn = () => {
    const [isToggled, setIsToggled] = useState(true)
  return (
    <div className='mobileNav'>
        <button onClick={() => setIsToggled(!isToggled)}><FontAwesomeIcon icon={faBars} /></button>
        {!isToggled && <MobileNavLinks/>}
    </div>
  )
}

export default ToggleBtn