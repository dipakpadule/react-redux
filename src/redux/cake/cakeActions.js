//create actions for cake shop

import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (number)=>{
    return {
        type: BUY_CAKE,
        payload: number
    }
}