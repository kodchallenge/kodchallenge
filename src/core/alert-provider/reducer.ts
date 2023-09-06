import deepmerge from "deepmerge";
import { KcAlertAction, KcAlertState } from "./type";

export const initialState: KcAlertState = {
    open: false,
};

const reducer = (state: KcAlertState, action: KcAlertAction) => {
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