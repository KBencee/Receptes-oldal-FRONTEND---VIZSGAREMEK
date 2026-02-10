import { useLocation } from "react-router-dom"
import type { RecipeType } from "../queryOptions/createRecipeQueryOption"
import styles from '../css/ForYou.module.css'
import { useMobileContext } from "../context/MobileContextProvider"
import HomeBtn from "../components/HomeBtn"

const ForYou = () => {
  const location = useLocation()
  const recipe = location.state?.recipe as RecipeType
  const {isMobile} = useMobileContext()
  
  return (
    <>
        <HomeBtn/>
        <div className={styles.forYou}>
            <section className={isMobile ? styles.mobileSection : ""}>
                <h1>{recipe?.nev}</h1>
                <img src={recipe.kepUrl} />
                <aside>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-share"></i>
                </aside>
                <div className={styles.tags}>
                    {recipe.cimkek.map((c,idx) => <span key={idx} className={styles.tag}>{c}</span>)}
                </div>
            </section>
            { !isMobile &&
            <section>
                {recipe.hozzavalok}<br/><br/>
                {recipe.leiras}
            </section>
            }
        </div>
    </>
  )
}

export default ForYou