export interface TicketsState {
  tickets: any[];
}

export interface TicketsAction {
  type: "GET_TICKETS_DATA";
  tickets: any[];
}
