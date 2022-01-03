import { FORM_VALIDATION } from '../../utils/constants';
import { modalValidationsAction } from './../../types/modalTypes';



export const modalValidationAction = (form: any[], currentField: string, currentPropName: string):modalValidationsAction  => {
    return{
        type:  currentPropName,
        form,
        currentField,
        currentPropName
    }
}