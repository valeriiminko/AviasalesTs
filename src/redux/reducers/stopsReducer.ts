import { StopsAction, StopsState,IStopsArr } from "../../types/stopsTypes";
import { ALL_STOPS, ARR_STOPS, ONE_STOP, THREE_STOPS, TWO_STOPS, WO_STOPS } from "../../utils/constants";

const initialState:StopsState = {
    stops: ARR_STOPS,
    currentstop: 'Все'
}

export const stopsReducer = (state = initialState, action:StopsAction):StopsState => {
    switch(action.type){
        case ALL_STOPS: return{
            ...state, stops: ARR_STOPS.map((item): IStopsArr => {
                const {stop, checked, quantity} = item;
                return {
                    stop,
                    checked: !checked,
                    quantity
                }
            }), currentstop: action.currentstop
        }
        case WO_STOPS: return{
            ...state, stops: ARR_STOPS.map((item): IStopsArr => {
                const {stop, checked, quantity} = item;
                return stop === action.currentstop ? {
                    stop,
                    checked: !checked,
                    quantity
                }: {
                    stop, checked, quantity
                }
            }), currentstop: action.currentstop
        }
        case ONE_STOP: return{
            ...state, stops: ARR_STOPS.map((item): IStopsArr => {
                const {stop, checked, quantity} = item;
                return stop === action.currentstop ? {
                    stop,
                    checked: !checked,
                    quantity
                }: {
                    stop, checked, quantity
                }
            }), currentstop: action.currentstop
        }
        case TWO_STOPS: return{
            ...state, stops: ARR_STOPS.map((item): IStopsArr => {
                const {stop, checked, quantity} = item;
                return stop === action.currentstop ? {
                    stop,
                    checked: !checked,
                    quantity
                }: {
                    stop, checked, quantity
                }
            }), currentstop: action.currentstop
        }
        case THREE_STOPS: return{
            ...state, stops: ARR_STOPS.map((item): IStopsArr => {
                const {stop, checked, quantity} = item;
                return stop === action.currentstop ? {
                    stop,
                    checked: !checked,
                    quantity
                }: {
                    stop, checked, quantity
                }
            }), currentstop: action.currentstop
        }
        default: return state;
    }
}