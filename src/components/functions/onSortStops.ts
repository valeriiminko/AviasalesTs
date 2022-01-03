import { stopsAction } from "../../redux/actions/stopsAction";

export const onSortStops = (
  e: React.ChangeEvent<HTMLInputElement>,
  stops: any[],
  currentstop: string
) => {
  let value = e.target as HTMLInputElement;
  if (value.value !== currentstop) {
    // console.log(value.value !== currentstop);
    return stopsAction(stops, value.value);
  } else {
    console.log(currentstop);
    return stopsAction(stops, value.value);
  }
};
