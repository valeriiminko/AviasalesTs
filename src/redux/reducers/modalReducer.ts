import {
  modalValidationFieldsAction,
  modalValidationsAction,
  modalValidationState,
} from "../../types/modalTypes";
import {
  EMAIL,
  FORM_VALIDATION,
  NAME,
  PASSPORT,
  PHONE,
  SURNAME,
} from "../../utils/constants";

const initialState: modalValidationState = {
  form: FORM_VALIDATION,
  currentField: "",
  currentPropName: "",
};
// commentsadsd
export const modalReducer = (
  state = initialState,
  action: modalValidationsAction
): modalValidationState => {
  switch (action.type) {
    case EMAIL:
    case NAME:
    case SURNAME:
    case PHONE:
    case PASSPORT:
      return {
        ...state,
        form: state.form.map((item): modalValidationFieldsAction => {
          const { type, isError, message, value, Error_message, input_type } =
            item;
          return type === action.currentPropName
            ? {
                type,
                isError,
                message,
                value: action.currentField,
                Error_message,
                input_type,
              }
            : item;
        }),
        currentField: action.currentField,
        currentPropName: action.currentPropName,
      };

    default:
      return state;
  }
};
