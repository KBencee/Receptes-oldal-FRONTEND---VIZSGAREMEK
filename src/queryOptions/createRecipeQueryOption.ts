import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://cbnncff2-7114.euw.devtunnels.ms"

export type RecipeType = {
    id: string,
    nev: string,
    leiras: string,
    hozzavalok: string,
    elkeszitesiIdo: number,
    nehezsegiSzint: string,
    likes: number,
    feltoltoUsername: string,
    cimkek: string[],
    mentveVan: boolean
}

export default function createRecipeQueryOption() {
    return queryOptions({
        queryKey: ['recipes'],
        queryFn: getRecipes
    })
}

const getRecipes = async () : Promise<RecipeType[]> => {
  const response = await axios.get(BASE_URL + "/api/Recept")
  return await response.data
}
