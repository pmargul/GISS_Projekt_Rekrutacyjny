import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import "moment/locale/en-gb";
import "moment/locale/pl";

const initialState = {
  language: "pl-PL",
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LANGUAGE_SETUP":
      const defaultLang =
        state.language.toString().localeCompare("pl-PL") === 0;
      const newLang = defaultLang ? "en-GB" : "pl-PL";
      momentLocalizer(Moment.locale(defaultLang ? "en-gb" : "pl"));
      return {
        ...state,
        language: newLang,
      };
    default:
      return state;
  }
};

export default systemReducer;
