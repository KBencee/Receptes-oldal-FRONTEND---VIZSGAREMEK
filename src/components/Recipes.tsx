import { useSuspenseQuery } from '@tanstack/react-query'
import createRecipeQueryOption from '../queryOptions/createRecipeQueryOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/Recipes.module.css'
import RecipeCard from './RecipeCard'


const Recipes = () => {
    const {data, isPending} = useSuspenseQuery(createRecipeQueryOption())
  return (
    <div className={styles.recipes}>
        <h1>Legújabb receptek</h1>
        <div className={styles.recipeCardContainer}>
          {isPending && <FontAwesomeIcon icon={faSpinner} spin/>}
          {data.map((recipe) => (<RecipeCard {...recipe}></RecipeCard>))}
        </div>
    </div>
  )
}

export default Recipes