import { Link } from "react-router-dom"
import type { linkType } from "./NavMiddle";
import styles from '../css/Nav.module.css'

type DesktopProps = {
  menuItems: linkType[],
  setActive: (activeItem: string) => void
}

const DesktopNavLinks = ({menuItems,setActive}: DesktopProps) => {

  return (
    <>
      {menuItems.map(x => <Link to={x.link} className={x.active ? styles.active : ""} onClick={() => setActive(x.name)}>{x.name}</Link>)}
    </>
  )
}

export default DesktopNavLinks