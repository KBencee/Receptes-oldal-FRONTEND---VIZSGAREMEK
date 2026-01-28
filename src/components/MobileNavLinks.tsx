import { Link } from 'react-router-dom'
import type { linkType } from './NavMiddle'

type MobileProps = {
  menuItems: linkType[],
  setActive: (activeItem: string) => void
}

const MobileNavLinks = ({menuItems,setActive}: MobileProps) => {
  return (
    <>
      {menuItems.map(x => <Link to={x.link} onClick={() => setActive(x.name)} className={x.active ? "active" : ""}>{x.name}</Link>)}
    </>
  )
}

export default MobileNavLinks