import { useLocation } from "react-router-dom"
import type { RecipeType } from "../queryOptions/createRecipeQueryOption"
import styles from '../css/ForYou.module.css'
import { useMobileContext } from "../context/MobileContextProvider"
import HomeBtn from "../components/HomeBtn"
import DescriptionCommentToggleBtn from "../components/DescriptionCommentToggleBtn"
import { useState } from "react"

const ForYou = () => {
    const location = useLocation()
    const recipe = location.state?.recipe as RecipeType
    const {isMobile} = useMobileContext()
    const [isDescription, setIsDescription] = useState<boolean>(true)
  
  return (
    <div className={styles.forYou}>
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
        { !isMobile &&
            <section className={styles.data}>
                <DescriptionCommentToggleBtn description={isDescription} setDescription={setIsDescription}/>
                <h2>{recipe.nev} by {recipe.feltoltoUsername}</h2>
                {isDescription ? 
                    <>
                        <p>Elkészítési idő: {recipe.elkeszitesiIdo} perc</p>
                        <h3>Hozzávalók:</h3>
                        <p>{recipe.hozzavalok}</p>
                        <h3>Leírás:</h3>
                        <div className={styles.description}>
                            <p>{recipe.leiras}</p>
                        </div>
                        <div className={styles.arrow}>
                            <i className="fa-solid fa-angle-down fa-bounce"></i>
                        </div>
                    </>
                :
                    <p>Comments</p>}
            </section>
        }
    </div>
  )
}

export default ForYou