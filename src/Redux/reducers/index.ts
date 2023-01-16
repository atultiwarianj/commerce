
import handleCart from "./Handlecart";
import { combineReducers } from "redux";
const rootReducers =combineReducers({
    handleCart,
})

export default rootReducers;
export type State = ReturnType<typeof rootReducers>