import { combineReducers, createStore } from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ''
}

const initialStateCustomer = {
    fullname: "",
    nationalID: "",
    createdAt: "",
}

function reducerAccount(state = initialStateAccount, action){
    switch(action.type){
        case 'account/deposit':
            return {...state, balance: state.balance + action.payload}
        case 'account/withdraw':
            return {...state, balance: state.balance - action.payload}
        case 'account/requestLoan':
            if(state.loan>0) return state;
            return {...state, loan: action.payload.loan, loanPurpose: action.payload.loanPurpose, balance: state.balance + action.payload.loan}
        case 'account/payLoan':
            return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan}
        default:
            return state
    }
}

function reducerCustomer(state = initialStateCustomer, action){
    switch(action.type){
        case 'customer/createCustomer':
            return {...state, fullname: action.payload.fullname, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}
        case 'customer/updateName':
            console.log(action);
            return {...state, fullname: action.payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    account: reducerAccount,
    customer: reducerCustomer,
})

const store = createStore(rootReducer)

// store.dispatch({type: 'account/deposit', payload: 500});
// console.log(store.getState());

// store.dispatch({type: 'account/withdraw', payload: 300});
// console.log(store.getState());

// store.dispatch({type: 'account/requestLoan', payload: {loan: 1000, loanPurpose: 'buy a car'}})
// console.log(store.getState());

// store.dispatch({type: 'account/payLoan'})
// console.log(store.getState());


// Action creator functions
function deposit(amount){
    return {type: "account/deposit", payload: amount}
}
function withdraw(amount){
    return {type: "account/withdraw", payload: amount}
}
function requestLoan(amount, purpose){
    return {type: 'account/requestLoan', payload: {loan: amount, loanPurpose: purpose}}
}
function payLoan(){
    return {type: 'account/payLoan'}
}

store.dispatch(deposit(500))
console.log(store.getState());
store.dispatch(withdraw(200))
console.log(store.getState());
store.dispatch(requestLoan(1000, 'buy a car'))
console.log(store.getState());
store.dispatch(payLoan())
console.log(store.getState());

function createCustomer(fullname, nationalID){
    return {type: 'customer/createCustomer', payload: {fullname, nationalID, createdAt: new Date().toISOString}}
}

function updateName(fullname){
    return {type: 'customer/updateName', payload: fullname}
}

store.dispatch(createCustomer("vivek rai", '123446'))
console.log(store.getState())
store.dispatch(updateName("vivek roy"))
console.log(store.getState());