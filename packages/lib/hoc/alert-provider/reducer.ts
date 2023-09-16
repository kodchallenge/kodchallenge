import deepmerge from "deepmerge";
import { KodAlertAction, KodAlertState } from "./type";

export const initialState: KodAlertState = {
    open: false,
};

const reducer = (state: KodAlertState, action: KodAlertAction) => {
  switch (action.type) {
    case 'ALERT':
      return deepmerge(initialState, action.payload);

    case 'DISMISS':
        return initialState;
    default:
      return state;
  }
};

export default reducer;