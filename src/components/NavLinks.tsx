import { Link } from "react-router-dom"

const NavLinks = (props: {name:string, link:string, active:boolean}) => {
  return (
    <Link to={props.link} className={props.active ? "active" : ""}>{props.name}</Link>
  )
}

export default NavLinks