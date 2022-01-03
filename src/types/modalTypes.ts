export interface modalValidationState{
    form: any[],
    currentField: string,
    currentPropName: string
}

export interface modalValidationsAction{
    type: string,
    form: any[],
    currentField: string,
    currentPropName: string
}

export interface modalValidationFieldsAction{
    type: string,
    isError: boolean,
    message: string,
    value: string,
    Error_message: string,
    input_type: string
}

export interface smth{
    email: string,
    phone: string,
    name: string,
    surname: string,
    passport: string,
    emailError: string,
    phoneError: string,
    nameError: string,
    surnameError: string
    passportError: string
}

export interface smthAction{
    type: string,
    email: string,
    phone: string,
    name: string,
    surname: string,
    passport: string,
    emailError: string,
    phoneError: string,
    nameError: string,
    surnameError: string
    passportError: string
}

export interface modalHandleState{
    tickets: any[]
    currentname: string
}

export interface modalHandleAction{
    type: string | boolean,
    tickets: any[],
    currentname: string
}

export type Props = {
    isActive: boolean;
    setActive: (active: boolean) => void;
 }