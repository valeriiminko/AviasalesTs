import { handleModalAction } from "../../redux/actions/handleModalAction";

export const onHandleModal = (
  e: React.ChangeEvent<EventTarget>,
  tickets: any[],
  name: string
) => {
  e.preventDefault();
  let event_value = e.target as HTMLButtonElement;
  if (event_value.value !== name) {
    // console.log(event_value.value !== name);
    // console.log(tickets);
    return handleModalAction(tickets, event_value.value);
  }

  return handleModalAction(tickets, name);
};
