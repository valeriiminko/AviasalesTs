import { modalHandleReducer } from './modalHandleReducer';
import { modalReducer } from './modalReducer';
import { combineReducers } from "redux";
import { currencyReducer } from './currencyReducer';
import { stopsReducer } from './stopsReducer';
import { ticketsReducer } from './ticketsReducer';


export const rootReducer = combineReducers({
    currencyReducer,
    stopsReducer,
    ticketsReducer,
    modalReducer,
    modalHandleReducer
})

export type rootState = ReturnType<typeof rootReducer>