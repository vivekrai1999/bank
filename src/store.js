import { combineReducers, createStore } from "redux";
import reducerAccount from "./features/account/accountSlice";
import reducerCustomer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
    account: reducerAccount,
    customer: reducerCustomer,
})

const store = createStore(rootReducer)

export default store