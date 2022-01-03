import { StopsAction } from "./../../types/stopsTypes";

export const stopsAction = (stops: any[], currentstop: string): StopsAction => {
  return {
    type: currentstop,
    stops,
    currentstop,
  };
};
