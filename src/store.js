import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerAccount from "./features/account/accountSlice";
import reducerCustomer from "./features/customer/customerSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    account: reducerAccount,
    customer: reducerCustomer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store