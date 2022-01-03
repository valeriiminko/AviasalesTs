export interface CurrencyState {
  currency: string;
  active: boolean;
}

export interface CurrencyAction {
  type: string;
  currency: string;
  active: boolean;
}

// enum CurrencyFields{
//     USD = 'USD',
//     RUB = 'RUB',
//     EUR = 'EUR'
// }

// export interface USD_Currency{
//     // type: CurrencyFields.USD
//     currency: CurrencyFields.USD
//     active: boolean
// }

// export interface RUB_Currency{
//     // type: CurrencyFields.RUB
//     currency: CurrencyFields.RUB
//     active: boolean
// }

// export interface EUR_Currency{
//     // type: CurrencyFields.EUR
//     currency: CurrencyFields.EUR
//     active: boolean
// }

// export type CurrencyReducer = USD_Currency | RUB_Currency | EUR_Currency;
