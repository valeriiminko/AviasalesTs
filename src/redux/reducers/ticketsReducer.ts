import { TicketsAction } from './../../types/ticketsTypes';
import { TicketsState } from '../../types/ticketsTypes';
import { GET_TICKETS_DATA } from "../../utils/constants";

const initialState: TicketsState = {
    tickets: []
}

export const ticketsReducer = (state = initialState, action: TicketsAction):TicketsState => {
    switch(action.type){
        case GET_TICKETS_DATA: return{
            ...state,
            tickets: action.tickets
        }
        default: return state;
    }
}