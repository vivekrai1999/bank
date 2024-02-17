const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ''
}


export default function reducerAccount(state = initialStateAccount, action){
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

export function deposit(amount){
    return {type: "account/deposit", payload: amount}
}
export function withdraw(amount){
    return {type: "account/withdraw", payload: amount}
}
export function requestLoan(amount, purpose){
    return {type: 'account/requestLoan', payload: {loan: amount, loanPurpose: purpose}}
}
export function payLoan(){
    return {type: 'account/payLoan'}
}
