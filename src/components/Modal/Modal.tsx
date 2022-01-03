import React from "react";
import { useDispatch } from "react-redux";
import { onHandleModal } from "../functions/onHandleModal";
import { usedTypedSelector } from "../hooks/usedTypedSelector";
import { Props } from "../../types/modalTypes";
import "./Modal.scss";
import { modalValidationAction } from "../../redux/actions/modalValitaionAction";

const Modal: React.FC<Props> = ({ isActive, setActive }: Props) => {
  const dispatch = useDispatch();
  const tickets = usedTypedSelector(
    (state) => state.modalHandleReducer.tickets
  );
  const currentname = usedTypedSelector(
    (state) => state.modalHandleReducer.currentname
  );
  const form = usedTypedSelector((state) => state.modalReducer.form);
  // const [{type, isError, message, Error_message, input_type}] = form;
  // console.log(type, isError, message, Error_message, input_type)
  const currentField = usedTypedSelector(
    (state) => state.modalReducer.currentField
  );

  const onInputsChange = (
    e: React.ChangeEvent<EventTarget>,
    form: any[],
    currentField: string,
    currentPropName: string
  ) => {
    let val = e.target as HTMLButtonElement;
    let name = e.target as HTMLButtonElement;
    // name.name = value.value;
    console.log(val.value);
    console.log(name.name);

    // if(value){

    // }
    return modalValidationAction(form, val.value, name.name);
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
        <form>
          {form.map((item, inx) => {
            const { type, isError, message, Error_message, input_type, value } =
              item;
            console.log(
              type,
              isError,
              message,
              Error_message,
              input_type,
              value
            );
            return (
              <div className="form-group" key={inx}>
                <label htmlFor={type}>{type}</label>
                <input
                  type={input_type}
                  className="form-control"
                  id={type}
                  name={type}
                  placeholder={!value ? Error_message : "Enter email"}
                  value={value}
                  onChange={(e) =>
                    dispatch(
                      onInputsChange(e, form, e.target.value, e.target.name)
                    )
                  }
                />
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
