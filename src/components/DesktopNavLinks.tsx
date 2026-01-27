import { Link } from "react-router-dom"
import type { linkType } from "./NavMiddle";

const DesktopNavLinks = (props: {name:string, link:string, active:boolean, menuItems: linkType[]}) => {
    const setActive = (activeItem:string) => {
      props.menuItems.forEach(e => {
          e.active = false
          if (e.name == activeItem)
              e.active = true
      });
    }

  return (
    <Link to={props.link} className={props.active ? "active" : ""} onClick={() => setActive(props.name)}>{props.name}</Link>
  )
}

export default DesktopNavLinks