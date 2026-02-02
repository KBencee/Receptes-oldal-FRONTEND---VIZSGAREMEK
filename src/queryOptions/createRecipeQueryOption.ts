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
    userId: string,
    "user": null,
    "receptCimkek": [],
    "mentettByUsers": []
}

export default function createRecipeQueryOption() {
    return queryOptions({
        queryKey: ['recipes'],
        queryFn: getRecipes
    })
}

const getRecipes = async () : Promise<RecipeType[]> => {
  const response = await axios.get(BASE_URL + "/api/Recept/recept")
  return await response.data
}
