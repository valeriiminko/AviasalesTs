import {  Form,  modalValidationsAction, modalValidationState } from "../../types/modalTypes"
import { EMAIL,  FORM_VALIDATION, NAME, PASSPORT, PHONE, regexp, SURNAME,  } from "../../utils/constants"

const initialState: modalValidationState = {
    form: FORM_VALIDATION,
    currentField: '',
    currentPropName: '',
    currentError: false
}

export const modalReducer = (state = initialState, action:modalValidationsAction): modalValidationState => {
    switch(action.type){
        case EMAIL:
        case NAME:
        case SURNAME:   
        case PHONE:
        case PASSPORT:
        return {
            ...state, form: state.form.map((item) : Form => {
                const {type, isError, message, value, Error_message, input_type} = item;
                return type === action.currentPropName ? {
                    type,
                    // isError: !value || !regexp.test(String(value).toLowerCase()) ? isError : !isError,
                    isError: action.isError,
                    message,
                    value: action.currentField,
                    Error_message,
                    input_type
                }: item
            }), currentField: action.currentField,
            currentPropName: action.currentPropName,
            currentError: action.isError
            
        }
        
        default: return state
    }
}