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
    kepUrl: string,
    cimkek: string[],
    mentveVan: boolean
}

export type CommentType = {
    id: string,
    szoveg: string,
    irtaEkkor: string,
    username: string,
    userId: string,
    sajatKomment: boolean
}

export default function createRecipeQueryOption() {
    return queryOptions({
        queryKey: ['recipes'],
        queryFn: getRecipes
    })
}


export function createRecipeCommentsQueryOption(id: string) {
    return queryOptions({
        queryKey: ['comments', id],
        queryFn: () => getRecipeComments(id)
    })
}

export const getRecipes = async () : Promise<RecipeType[]> => {
  const response = await axios.get(BASE_URL + "/api/Recept")
  return await response.data
}

const getRecipeComments = async (id: string) : Promise<CommentType[]> => {
  const response = await axios.get(BASE_URL + `/api/Komment/recept/${id}`)
  return await response.data
}
