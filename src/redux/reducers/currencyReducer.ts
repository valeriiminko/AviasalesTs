import { CurrencyAction, CurrencyState } from "../../types/currencyTypes";
import {
  EUR_CURRENCY,
  RUB_CURRENCY,
  USD_CURRENCY,
} from "../../utils/constants";

const initialState: CurrencyState = {
  currency: "",
  active: false,
};
export const currencyReducer = (
  state = initialState,
  action: CurrencyAction
): CurrencyState => {
  switch (action.type) {
    case USD_CURRENCY:
      return {
        ...state,
        currency: action.currency,
        active: action.active,
      };
    case RUB_CURRENCY:
      return {
        ...state,
        currency: action.currency,
        active: action.active,
      };
    case EUR_CURRENCY:
      return {
        ...state,
        currency: action.currency,
        active: action.active,
      };

    default:
      return state;
  }
};
