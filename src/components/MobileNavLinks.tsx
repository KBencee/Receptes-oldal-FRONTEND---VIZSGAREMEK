import { Link } from 'react-router-dom'
import type { linkType } from './NavMiddle'

const MobileNavLinks = (props: {menuItems: linkType[]}) => {
  return (
    <>
      {props.menuItems.map(x => <Link to={x.link} className={x.active ? "active" : ""}>{x.name}</Link>)}
    </>
  )
}

export default MobileNavLinks