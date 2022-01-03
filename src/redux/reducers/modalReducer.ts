import {  modalValidationFieldsAction, modalValidationsAction, modalValidationState } from "../../types/modalTypes"
import { EMAIL,  FORM_VALIDATION, NAME, PASSPORT, PHONE, SURNAME,  } from "../../utils/constants"

const initialState: modalValidationState = {
    form: FORM_VALIDATION,
    currentField: '',
    currentPropName: ''
}

export const modalReducer = (state = initialState, action:modalValidationsAction): modalValidationState => {
    switch(action.type){
        case EMAIL: return {
            ...state, form: state.form.map((item) : modalValidationFieldsAction => {
                const {type, isError, message, value, Error_message, input_type} = item;
                return type === action.currentPropName ? {
                    type,
                    isError,
                    message,
                    value: action.currentField,
                    Error_message,
                    input_type
                }: {
                    type,
                    isError: !isError,
                    message,
                    value: !isError ? state.currentField: '',
                    Error_message,
                    input_type
                }
            }), currentField: action.currentField,
            currentPropName: action.currentPropName
        }

        case NAME: return {
            ...state, form: FORM_VALIDATION.map((item) : modalValidationFieldsAction => {
                const {type, isError, message, value, Error_message, input_type} = item;
                return type === action.currentPropName ? {
                    type,
                    isError,
                    message,
                    value: action.currentField,
                    Error_message,
                    input_type
                }: {
                    type,
                    isError: !isError,
                    message,
                    value: !isError ? state.currentField: '',
                    Error_message,
                    input_type
                }
            }), currentField: action.currentField,
            currentPropName: action.currentPropName
        }
        case SURNAME: return {
            ...state, form: FORM_VALIDATION.map((item) : modalValidationFieldsAction => {
                const {type, isError, message, value, Error_message, input_type} = item;
                return type === action.currentPropName ? {
                    type,
                    isError,
                    message,
                    value: action.currentField,
                    Error_message,
                    input_type
                }: {
                    type,
                    isError: !isError,
                    message,
                    value: !isError ? state.currentField: '',
                    Error_message,
                    input_type
                }
            }), currentField: action.currentField,
            currentPropName: action.currentPropName
        }
        case PHONE: return {
            ...state, form: FORM_VALIDATION.map((item) : modalValidationFieldsAction => {
                const {type, isError, message, value, Error_message, input_type} = item;
                return type === action.currentPropName ? {
                    type,
                    isError,
                    message,
                    value: action.currentField,
                    Error_message,
                    input_type
                }: {
                    type,
                    isError: !isError,
                    message,
                    value: !isError ? state.currentField: '',
                    Error_message,
                    input_type
                }
            }), currentField: action.currentField,
            currentPropName: action.currentPropName
        }
        case PASSPORT: return {
            ...state, form: FORM_VALIDATION.map((item) : modalValidationFieldsAction => {
                const {type, isError, message, value, Error_message, input_type} = item;
                return type === action.currentPropName ? {
                    type,
                    isError,
                    message,
                    value: action.currentField,
                    Error_message,
                    input_type
                }: {
                    type,
                    isError: !isError,
                    message,
                    value: !isError ? state.currentField: '',
                    Error_message,
                    input_type
                }
            }), currentField: action.currentField,
            currentPropName: action.currentPropName
        }
        
        default: return state
    }
}