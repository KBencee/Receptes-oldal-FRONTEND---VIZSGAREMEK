import { useQuery } from '@tanstack/react-query'
import createRecipeQueryOption from '../queryOptions/createRecipeQueryOption'

const Recipes = () => {
    const {data} = useQuery(createRecipeQueryOption())
  return (
    <div>
        Legújabb receptek
        {JSON.stringify(data)}
    </div>
  )
}

export default Recipes