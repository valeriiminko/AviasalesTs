import { currencyAction } from "../../redux/actions/currencyAction";

export const onSortCurrency = (
  e: React.FormEvent<EventTarget>,
  currency: string,
  active: boolean
) => {
  e.preventDefault();
  let value = e.target as HTMLButtonElement;
  if (value.value !== currency) {
    console.log(value.value);
    return currencyAction(value.value, (active = true));
  }
  return currencyAction(value.value, (active = false));
};
