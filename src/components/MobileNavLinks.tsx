import { Link } from 'react-router-dom'
import type { linkType } from './NavMiddle'
import styles from '../css/Nav.module.css'

type MobileProps = {
  menuItems: linkType[],
  setActive: (activeItem: string) => void
}

const MobileNavLinks = ({menuItems,setActive}: MobileProps) => {
  return (
    <>
      {menuItems.map(x => <Link to={x.link} onClick={() => setActive(x.name)} className={x.active ? styles.active : ""} key={x.id}>{x.name}</Link>)}
    </>
  )
}

export default MobileNavLinks