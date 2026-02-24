import { useMobileContext } from '../context/MobileContextProvider'
import HomeBtn from './HomeBtn'
import styles from '../css/ForYou.module.css'
import type { RecipeType } from '../queryOptions/createRecipeQueryOption'


const ForYouReel = (recipe:RecipeType) => {
    const {isMobile} = useMobileContext()
    
  return (
    <section className={isMobile ? styles.mobileSection : ""}>
        <div className={styles.forYouHead}><HomeBtn/><span>{recipe.nev}</span></div>
        <img src={recipe.kepUrl} />
        <aside>
            <div className={styles.likes}>
                {recipe.likes}
                <i className="fa-regular fa-heart"></i>
            </div>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share"></i>
            {isMobile ? <i className="fa-solid fa-ellipsis"></i> : ""}
        </aside>
        <div className={styles.tags}>
            {recipe.cimkek.map((c,idx) => <span key={idx} className={styles.tag}>{c}</span>)}
        </div>
    </section>
  )
}

export default ForYouReel