import { SIGNUP_SUCCESSFULL,SIGNUP_FAIL } from "./reducertype"

const inistalState = {
    signupdetail:[{username:'', email:'', password:'', password2:''}],
    error:'error'
}

const signupreducer =(state=inistalState, action)=>{
    switch(action.type){
        case SIGNUP_SUCCESSFULL:
           state={
               ...state,
            userdetail:action.payload
        }
    }
    if (action.type == SIGNUP_FAIL){
        state={
            ...state,
            error:action.payload
        }
    }
    return state
}

export default signupreducer;