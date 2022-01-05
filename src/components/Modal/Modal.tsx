import React, { useState } from 'react'
import { Props } from '../../types/modalTypes';
import  './Modal.scss';

const Modal:React.FC<Props>= ({isActive, setActive} : Props) => {
    const [formValidation, setFormValidation] = useState([
        {type: 'email',  isError: false, message:'Email format is valid', value: '', Error_message:'Email format is invalid, use correct email format', input_type: 'email'},
        {type: 'name', isError: false, message:'Name format is valid', value: '', Error_message:'Name format is invalid, use correct name format', input_type: 'text'},
        {type: 'surname', isError: false, message:'Surname format is valid', value: '', Error_message:'Surname format is invalid, use surname email format', input_type: 'text'},
        {type: 'phone', isError: false, message:'Phone format is valid', value: '', Error_message:'Phone format is invalid, use correct phone format', input_type: 'tel'},
        {type: 'passport', isError: false, message:'Passport format is valid', value: '', Error_message:'Passport format is invalid, use correct passport format', input_type: 'text'}
    ]);

    const onBlurForm = (e:React.FocusEvent<HTMLInputElement>) => {
        const [{type, isError, message, value, Error_message, input_type}] = formValidation
        let name = e.target.name;
        console.log(name);
        switch(name){
            case type: setFormValidation(prevState => {
                return{
                    ...prevState,
                    
                }
            })
        }
        
    }
    


    return (
        <div className= {isActive ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={isActive ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>
            <form>
            {formValidation.map((item,inx) =>{
            const {type, isError, message, Error_message, input_type, value} = item;
            console.log(type, isError, message, Error_message, input_type,value )
            return(
                                <div className="form-group" key={inx}>
                                    <label htmlFor={type}>{type}</label>
                                    <input type={input_type} className="form-control" id={type} 
                                    name={type}
                                    placeholder={!value ? Error_message: 'Enter email'}  
                                    value={value} 
                                    onBlur={(e) => onBlurForm(e)}
                                   />
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
