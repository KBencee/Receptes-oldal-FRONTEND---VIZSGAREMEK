import type { RecipeType } from "../queryOptions/createRecipeQueryOption"
import styles from '../css/Recipes.module.css'

const RecipeCard = (recipe:RecipeType) => {
  return (
    <div onClick={() => {}} className={styles.recipeCard}>
        <img src="backgroud.jpg" alt={recipe.nev} title={recipe.nev}/>
        <h2>{recipe.nev}</h2>
        <h3>{recipe.feltoltoUsername}</h3>
        <p>{recipe.likes}❤️</p>
        <p>{recipe.elkeszitesiIdo} perc</p>
        <p>{recipe.nehezsegiSzint}</p>
        <div className={styles.tags}>
            {recipe.cimkek.map((c,idx) => <span key={idx} className={styles.tag}>{c}</span>)}
        </div>
        <p>
            <i className={recipe.mentveVan ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}></i>
        </p>
    </div>
  )
}

export default RecipeCard