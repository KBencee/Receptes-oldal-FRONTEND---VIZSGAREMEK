import { useLocation } from "react-router-dom"
import { createRecipeCommentsQueryOption, getNextRecipe, getPreviusRecipe, type RecipeType } from "../queryOptions/createRecipeQueryOption"
import styles from '../css/ForYou.module.css'
import { useMobileContext } from "../context/MobileContextProvider"
import HomeBtn from "../components/HomeBtn"
import DescriptionCommentToggleBtn from "../components/DescriptionCommentToggleBtn"
import { useContext, useEffect, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Comment from "../components/Comment"
import { AuthUserContext } from "../context/AuthenticatedUserContextProvider"

const ForYou = () => {
    const location = useLocation()
    const [recipe, setRecipe] = useState<RecipeType>(location.state.recipe as RecipeType)
    const {isMobile} = useMobileContext()
    const [isDescription, setIsDescription] = useState<boolean>(true)
    const {data} = useQuery(createRecipeCommentsQueryOption(recipe.id))
    const authUser = useContext(AuthUserContext)

    console.log(recipe.id)  

    const readNextRecipe = () => {
        getNextRecipe(recipe.id)
        .then(response => {setRecipe(response)})
    }

    const readPreviousRecipe = () => {
        getPreviusRecipe(recipe.id)
        .then(response => {setRecipe(response)})
    }


    const lastScrollY = useRef(0);
    const isInitialScroll = useRef(true);

    useEffect(() => {
        window.scrollTo(0, 1);
        isInitialScroll.current = true;
        
        const handleScroll = () => {
            if (isInitialScroll.current) {
                isInitialScroll.current = false;
                lastScrollY.current = window.scrollY;
                return;
            }
            
            if (window.scrollY > lastScrollY.current) {
                console.log('Scrolling DOWN');
                readNextRecipe();
            } else if (window.scrollY < lastScrollY.current) {
                console.log('Scrolling UP');
                readPreviousRecipe();
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scrollend', handleScroll);
        return () => window.removeEventListener('scrollend', handleScroll);
    }, [recipe.id]);

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
                    <div className={styles.comments}>
                        {data?.map(c => <Comment key={c.id} {...c}/>)}
                    </div>
                }
                {
                    authUser && !isDescription &&
                    <div>
                        <h2>Írjon kommentet:</h2>
                        <div className={styles.sendComment}>
                            <input type="text" name="comment"/>
                            <button><i className="fa-solid fa-paper-plane fa-xl"></i></button>
                        </div>
                    </div>
                }

            </section>
        }
    </div>
  )
}

export default ForYou