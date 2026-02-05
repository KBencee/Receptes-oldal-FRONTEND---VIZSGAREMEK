import type { RecipeType } from "../queryOptions/createRecipeQueryOption"
import styles from '../css/Recipes.module.css'

const RecipeCard = (recipe:RecipeType) => {
  return (
    <div className={styles.recipeCard}>
        <img src="backgroud.jpg" alt={recipe.nev} title={recipe.nev}/>
        <h1>{recipe.nev}</h1>
        <h2>{recipe.feltoltoUsername}</h2>
        <p>{recipe.likes}❤️</p>
        <p>{recipe.elkeszitesiIdo} perc</p>
        <p>{recipe.nehezsegiSzint}</p>
        <div className={styles.tags}>
            {recipe.cimkek.map(c => <span className={styles.tag}>{c}</span>)}
        </div>
        <p>

            <i className={recipe.mentveVan ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}></i>
        </p>
    </div>
  )
}

export default RecipeCard