import React from 'react'
import { useDispatch } from 'react-redux';
import { usedTypedSelector } from '../hooks/usedTypedSelector';
import { Props } from '../../types/modalTypes';
import  './Modal.scss';
import { modalValidationAction } from '../../redux/actions/modalValitaionAction';
import { regexp } from '../../utils/constants';

const Modal:React.FC<Props>= ({isActive, setActive} : Props) => {
    const dispatch = useDispatch();
    const tickets = usedTypedSelector(state => state.modalHandleReducer.tickets);
    const currentname = usedTypedSelector(state => state.modalHandleReducer.currentname);
    const currentError = usedTypedSelector(state => state.modalReducer.currentError);
    const form = usedTypedSelector(state => state.modalReducer.form)
    // console.log(form)
    const currentField = usedTypedSelector(state => state.modalReducer.currentField);


    const onInputsChange = (e: React.ChangeEvent<EventTarget>, form: any[], currentField: string, currentPropName:string, currentError: boolean) => {
        const [{type, isError, message, Error_message, input_type, value}] = form;
        // console.log(type, isError, message, Error_message, input_type, value)
        let val = e.target as HTMLButtonElement;
        let name = e.target as HTMLButtonElement;


        // if(!val.value ||  !regexp.test(String(val.value).toLowerCase())){
        //     return modalValidationAction(form.map(item => {
        //         const {type, isError, message, Error_message, input_type, value} = item;
        //         console.log({
        //             ...item,
        //             isError: !currentError,
        //         })
        //             return{
        //                 ...item,
        //                 isError: !currentError,
        //             }
        //         }), val.value, name.name,currentError)
        // }else{
        //     return modalValidationAction(form.map(item => {
        //         const {type, isError, message, Error_message, input_type, value} = item;
        //         console.log({
        //             ...item,
        //             isError: currentError,
        //         })
        //             return{
        //                 ...item,
        //                 isError: currentError,
        //             }
        //         }), val.value, name.name, currentError)
        // }
        
        return modalValidationAction(form, val.value, name.name, isError);
        

    }

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e)
    }





    return (
        <div className= {isActive ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={isActive ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>
            <form onSubmit={(e) => onFormSubmit(e)}>
            {form.map((item,inx) =>{
            const {type, isError, message, Error_message, input_type, value} = item;
            return(
                                <div className="form-group" key={inx}>
                                    <label htmlFor={type}>{type}</label>
                                    <input type={input_type} className={isError ? 'form-control is-invalid': 'form-control'} id={type} 
                                    name={type}
                                    placeholder={!value ? Error_message: 'Enter email'}  
                                    value={value} 
                                    onChange={(e) => dispatch(onInputsChange(e, form.map(item => {
                                        const {type, isError, message, Error_message, input_type, value} = item;
                                        if(!e.target.value || !regexp.test(String(e.target.value).toLowerCase())){
                                            return{
                                                ...item,
                                                isError: !isError
                                            }
                                        }else{
                                            return{
                                                ...item,
                                                isError: isError
                                            }
                                        }
                                    }), e.target.value, e.target.name, currentError))}/>
                                    {isError ? 
                                    (
                                            <div className="invalid-feedback">
                                                {Error_message}
                                            </div>
                                    ): null
                                }

                                </div>
            )
        })}
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
            </div>
        </div>
        
        
            
    )
}

export default Modal;
