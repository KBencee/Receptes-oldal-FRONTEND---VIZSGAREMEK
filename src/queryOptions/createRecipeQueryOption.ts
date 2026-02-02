import { queryOptions } from "@tanstack/react-query";

export default function createRecipeQueryOption() {
    return queryOptions({
        queryKey: ['recipes'],
        queryFn: getRecipes
    })
}

const getRecipes = async () => {
  const response = await fetch("https://cbnncff2-7114.euw.devtunnels.ms/api/Recept/recept")
  return await response.json()
}
