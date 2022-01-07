import React from "react";
import { useDispatch } from "react-redux";
import { usedTypedSelector } from "../hooks/usedTypedSelector";
import { Form, FormTypes, Props } from "../../types/modalTypes";
import "./Modal.scss";
import { modalValidationAction } from "../../redux/actions/modalValitaionAction";
import { regexp } from "../../utils/constants";

const Modal: React.FC<Props> = ({ isActive, setActive }: Props) => {
  const dispatch = useDispatch();
  const tickets = usedTypedSelector(
    (state) => state.modalHandleReducer.tickets
  );
  const currentname = usedTypedSelector(
    (state) => state.modalHandleReducer.currentname
  );
  const currentError = usedTypedSelector(
    (state) => state.modalReducer.currentError
  );
  const form = usedTypedSelector((state) => state.modalReducer.form);
  // console.log(form)
  const currentField = usedTypedSelector(
    (state) => state.modalReducer.currentField
  );

  const onInputsChange = (
    e: React.ChangeEvent<EventTarget>,
    form: Form[],
    currentField: string,
    currentPropName: FormTypes,
    currentError: boolean
  ) => {
    let { value: targetValue } = e.target as HTMLButtonElement;
    let { name } = e.target as HTMLButtonElement;

    return modalValidationAction(
      form,
      targetValue,
      name,
      !regexp[currentPropName].test(String(targetValue).toLowerCase())
    );
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div
      className={isActive ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={isActive ? "modal__content active" : "modal"}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={(e) => onFormSubmit(e)}>
          {form.map((item, inx) => {
            const { type, isError, message, Error_message, input_type, value } =
              item;
            return (
              <div className="form-group" key={inx}>
                <label htmlFor={type}>{type}</label>
                <input
                  type={input_type}
                  className={
                    isError ? "form-control is-invalid" : "form-control"
                  }
                  id={type}
                  name={type}
                  placeholder={!value ? Error_message : "Enter email"}
                  value={value}
                  onChange={(e) =>
                    dispatch(
                      onInputsChange(
                        e,
                        form,
                        e.target.value,
                        type,
                        currentError
                      )
                    )
                  }
                />
                {isError ? (
                  <div className="invalid-feedback">{Error_message}</div>
                ) : null}
              </div>
            );
          })}
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
