export const USD_CURRENCY = "USD";
export const EUR_CURRENCY = "EUR";
export const RUB_CURRENCY = "RUB";
export const RUB_ICON = "&#8381";
export const ALL_STOPS = "Все";
export const WO_STOPS = "Без пересадок";
export const ONE_STOP = "1 пересадка";
export const TWO_STOPS = "2 пересадки";
export const THREE_STOPS = "3 пересадки";
export const GET_TICKETS_DATA = "GET_TICKETS_DATA";
export const _12400 = "12400";
export const _13100 = "13100";
export const _11000 = "11000";
export const _15300 = "15300";
export const _12450 = "12450";
export const _14250 = "14250";
export const _13400 = "13400";
export const _17400 = "17400";
export const _16700 = "16700";
export const _13600 = "13600";
export const IS_OPENED = "IS_OPENED";
export const EMAIL = "email";
export const NAME = "name";
export const SURNAME = "surname";
export const PHONE = "phone";
export const PASSPORT = "passport";

export const ARR_CURRENCY = [USD_CURRENCY, RUB_CURRENCY, EUR_CURRENCY];

export const ARR_STOPS = [
  { stop: ALL_STOPS, checked: false, quantity: 3 },
  { stop: WO_STOPS, checked: false, quantity: 0 },
  { stop: ONE_STOP, checked: false, quantity: 1 },
  { stop: TWO_STOPS, checked: false, quantity: 2 },
  { stop: THREE_STOPS, checked: false, quantity: 3 },
];

export const FORM_VALIDATION = [
  {
    type: EMAIL,
    isError: false,
    message: "Email format is valid",
    value: "",
    Error_message: "Email format is invalid, use correct email format",
    input_type: "email",
  },
  {
    type: NAME,
    isError: false,
    message: "Name format is valid",
    value: "",
    Error_message: "Name format is invalid, use correct name format",
    input_type: "text",
  },
  {
    type: SURNAME,
    isError: false,
    message: "Surname format is valid",
    value: "",
    Error_message: "Surname format is invalid, use surname email format",
    input_type: "text",
  },
  {
    type: PHONE,
    isError: false,
    message: "Phone format is valid",
    value: "",
    Error_message: "Phone format is invalid, use correct phone format",
    input_type: "tel",
  },
  {
    type: PASSPORT,
    isError: false,
    message: "Passport format is valid",
    value: "",
    Error_message: "Passport format is invalid, use correct passport format",
    input_type: "text",
  },
];

export const TICKET_PRICE = [
  { price: "12400", isActive: false },
  { price: "13100", isActive: false },
  { price: "15300", isActive: false },
  { price: "11000", isActive: false },
  { price: "13400", isActive: false },
  { price: "12450", isActive: false },
  { price: "13600", isActive: false },
  { price: "14250", isActive: false },
  { price: "16700", isActive: false },
  { price: "17400", isActive: false },
];
