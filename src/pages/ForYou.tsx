import { useLocation } from "react-router-dom"
import { createNextRecipeQueryOption, createPrevRecipeQueryOption, createRecipeCommentsQueryOption, type RecipeType } from "../queryOptions/createRecipeQueryOption"
import styles from '../css/ForYou.module.css'
import { useMobileContext } from "../context/MobileContextProvider"
import DescriptionCommentToggleBtn from "../components/DescriptionCommentToggleBtn"
import { useContext, useEffect, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Comment from "../components/Comment"
import { AuthUserContext } from "../context/AuthenticatedUserContextProvider"
import ForYouReel from "../components/ForYouReel"

const ForYou = () => {
    const location = useLocation()
    const [recipe, setRecipe] = useState<RecipeType>(location.state.recipe as RecipeType)
    const {isMobile} = useMobileContext()
    const [isDescription, setIsDescription] = useState<boolean>(true)
    const comments = useQuery(createRecipeCommentsQueryOption(recipe.id))
    const authUser = useContext(AuthUserContext)
    const next = useQuery(createNextRecipeQueryOption(recipe.id))
    const prev = useQuery(createPrevRecipeQueryOption(recipe.id))

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
                if (prev.data)
                    setRecipe(prev.data as RecipeType)
            } 
            else if (window.scrollY < lastScrollY.current) {
                console.log('Scrolling UP');
                if (next.data)
                    setRecipe(next.data as RecipeType)
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scrollend', handleScroll);
        return () => window.removeEventListener('scrollend', handleScroll);
    }, [recipe.id, next.data]);

  return (
    <div className={styles.forYou}>
        <ForYouReel {...recipe}/>
        { !isMobile &&
            <>
                <div className={styles.arrows}>
                    <i className="fa-solid fa-circle-down fa-rotate-180 fa-xl" onClick={() => {setRecipe(next.data as RecipeType)}}></i>
                    <i className="fa-solid fa-circle-down fa-xl" onClick={() => {setRecipe(prev.data as RecipeType)}}></i>
                </div>
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
                            {comments.data?.map(c => <Comment key={c.id} {...c}/>)}
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
            </>
        }
    </div>
  )
}

export default ForYou