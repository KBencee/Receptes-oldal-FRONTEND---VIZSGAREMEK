import { mutationOptions } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://cbnncff2-7114.euw.devtunnels.ms"


export function createRegisterMutationOption(username: string, password: string) {
    return mutationOptions({
        mutationFn: () => register(username, password)
    })
}

export const register = async (username: string, password: string) => {
    console.log("Try register...")
    const response = await axios.post(BASE_URL + "/api/Auth/register", {username, password})
    if(!response.data){
        console.error("Hibás felhasználó név vagy jelszó!");
        return
    }

    return await response.data
}