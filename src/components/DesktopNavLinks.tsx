import { Link } from "react-router-dom"
import type { linkType } from "./NavMiddle";

const DesktopNavLinks = (props: {menuItems: linkType[]}) => {

    const setActive = (activeItem:string) => {
      props.menuItems.forEach(e => {
        e.active = false
        if (e.name == activeItem)
          e.active = true
      });
    }

  return (
    <>
      {props.menuItems.map(x => <Link to={x.link} className={x.active ? "active" : ""} onClick={() => setActive(x.name)}>{x.name}</Link>)}
    </>
  )
}

export default DesktopNavLinks