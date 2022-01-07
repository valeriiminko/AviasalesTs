import { FORM_VALIDATION } from "../../utils/constants";
import { Form, modalValidationsAction } from "./../../types/modalTypes";

export const modalValidationAction = (
  form: Form[],
  currentField: string,
  currentPropName: string,
  isError: boolean
): modalValidationsAction => {
  return {
    type: currentPropName,
    form,
    currentField,
    currentPropName,
    isError,
  };
};
