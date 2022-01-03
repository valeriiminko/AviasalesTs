import { CurrencyAction } from "../../types/currencyTypes"



export const currencyAction = (currency: string, active: boolean) : CurrencyAction => {
    return{
        type: currency,
        currency,
        active
    }
}