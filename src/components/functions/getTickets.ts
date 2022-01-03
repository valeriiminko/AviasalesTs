import { Dispatch } from "redux";
import { ticketsAction } from "../../redux/actions/ticketsAction";
import { TicketsAction } from "../../types/ticketsTypes";

export const getTickets = () => async (dispatch: Dispatch<TicketsAction>) => {
  try {
    let res = await fetch(
      "https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json"
    )
      .then((r) => r.json())
      .then((data) => dispatch(ticketsAction(data.tickets)));
  } catch (e) {
    console.log(e);
  }
};
