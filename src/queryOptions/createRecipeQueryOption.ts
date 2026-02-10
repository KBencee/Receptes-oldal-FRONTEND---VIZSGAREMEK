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

type TokenResponse = {
    access: string,
    refresh: string
}

export async function loginUser(username: string, password: string) {
    console.log("Try login...");
    
    const response = await fetch(
        BASE_URL + "/api/Auth/login/",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        }
    )

    if(!response.ok){
        console.error("Hibás felhasználó név vagy jelszó!");
        return
    }
    alert("Sikeres bejelentkezés")
    const data:TokenResponse = await response.json()
    localStorage.setItem("access", data.access)
    localStorage.setItem("refresh", data.refresh)
}