import {  IS_OPENED, TICKET_PRICE, _11000, _12400, _12450, _13100, _13400, _13600, _14250, _15300, _16700, _17400 } from '../../utils/constants';
import { modalHandleState, modalHandleAction } from './../../types/modalTypes';


const initialState: modalHandleState = {
    tickets: TICKET_PRICE,
    currentname: ''
}  

export const modalHandleReducer = (state = initialState, action: modalHandleAction):modalHandleState => {
    switch(action.type){
        case _11000: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _13100: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _13400: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _13600: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _12400: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _12450: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _15300: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _16700: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _17400: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        case _14250: return {
            ...state,
            tickets: TICKET_PRICE.map(ticket => {
                const {price, isActive} = ticket;
                 return price === action.currentname ? {
                    price,
                    isActive: !isActive
                 }:{
                    price,
                    isActive
                 }
            }), currentname: action.currentname
        }
        default: return state;
    }
}