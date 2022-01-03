import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ARR_CURRENCY, ARR_STOPS } from "../../utils/constants";
import { onSortCurrency } from "../functions/onSortCurrency";
import { onSortStops } from "../functions/onSortStops";
import { usedTypedSelector } from "../hooks/usedTypedSelector";
import { Props } from "../../types/modalTypes";

const Filter: React.FC<Props> = ({ isActive, setActive }: Props) => {
  const { active, currency } = usedTypedSelector(
    (state) => state.currencyReducer
  );
  const { stops, currentstop } = usedTypedSelector(
    (state) => state.stopsReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="currency">
          <p>ВАЛЮТА</p>
          <div className="btn-group " role="group" aria-label="Basic example">
            {ARR_CURRENCY.map((item, inx) => {
              return (
                <button
                  type="button"
                  className={
                    item === currency
                      ? "btn btn-primary active"
                      : "btn btn-light"
                  }
                  id={item === currency ? "1" : "bd"}
                  key={inx}
                  value={item}
                  onClick={(e) => dispatch(onSortCurrency(e, currency, active))}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="stops mt-4">
          <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
          {ARR_STOPS.map((item, inx) => {
            const { stop, checked } = item;
            // console.log(stops[inx].checked)
            return (
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  value={stop}
                  key={inx}
                  name={stop}
                  checked={stops[inx].checked}
                  id={stop}
                  onChange={(e) => dispatch(onSortStops(e, stops, currentstop))}
                />
                <label className="custom-control-label" htmlFor={stop}>
                  {stop}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
