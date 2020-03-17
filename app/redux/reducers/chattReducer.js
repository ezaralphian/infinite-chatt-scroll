import { GET_CHATT, SET_CHATT } from "../actionTypes";
import createReducer from "../createReducer";

const initialState = []


export const chatt = createReducer(initialState, {
  [GET_CHATT](state, action) {
    return [...state, ...action.data ];
  },
  [SET_CHATT](state, action) {
    return [action.data, ...state];
  },
})