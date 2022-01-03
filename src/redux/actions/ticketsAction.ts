import { GET_TICKETS_DATA } from '../../utils/constants';
import { TicketsAction } from './../../types/ticketsTypes';


export const ticketsAction = (tickets:any []):TicketsAction => {
    return{
        type: GET_TICKETS_DATA,
        tickets
    }
}