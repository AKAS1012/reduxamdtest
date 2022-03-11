import { SIGNUP_SUCCESSFULL, SIGNUP_FAIL } from "../Reducer/reducertype";
import axios from 'axios';

export const signuperror = async (dispatch) =>{
    await dispatch({
    type:SIGNUP_FAIL,
    payload:''
    })
}

export const saveresults = async (dispatch) =>{
    let  updatedResult = [] 
    axios.post('', {params:{username: '', password:'', password2:''}})
     .then((res)=>{
         console.log(res.data)

         updatedResult =[{username: '', password:'', password2:''}];
         dispatch({
             type:SIGNUP_SUCCESSFULL,
             payload:updatedResult
         });
     })
     .catch(error => console.log('Error : ' + error ));
}

 export const signupaction = (username, password, password2) =>{
     return dispatch=>{
         dispatch(saveresults(username, password, password2))
     }
 }