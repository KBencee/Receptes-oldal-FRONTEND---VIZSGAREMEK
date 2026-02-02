import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import createRecipeQueryOption from '../queryOptions/createRecipeQueryOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/Recipes.module.css'


const Recipes = () => {
    const {data, isPending} = useSuspenseQuery(createRecipeQueryOption())
  return (
    <div className={styles.recipes}>
        Legújabb receptek
        {isPending && <FontAwesomeIcon icon={faSpinner} spin/>}
        {JSON.stringify(data[0].nev)}
    </div>
  )
}

export default Recipes