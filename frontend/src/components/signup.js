import React from "react";
import Login from './login'
import { signupaction } from "../action/signupaction";
import { connect } from "react-redux";


const Signup =()=>{
    return(
        <>
            <form style={{border:'2px solid #ccc', margin:'4%', padding:'5%', width:'40%', float:'left'}}>
                <div className="container">
                    <h1>Singup Form</h1>
                    <p>please fill the singup form</p>
                    <hr></hr>
                    <label for="email" style={{marginLeft:'3%'}}><b>Email</b></label><br></br>
                    <input type="text" name="email" style={{marginLeft:'3%'}} placeholder="email" required></input><br></br>
                    <label for='psw' style={{marginLeft:'3%'}}><b>Password</b></label><br></br>
                    <input type="password" placeholder="repeated password" style={{marginTop:'2%'}} name="repated-psw"  required></input><br></br>
                    <label><input type="checkbox" checked="checked" name="remember" style={{marginLeft:'10%'}}></input>Remeber me</label>                   
                    <p style={{marginLeft:'2%'}}>by creating account to your agree to our:-<a href="/" style={{color:'dodgerblue', marginLeft:'2%'}}>tearms and conditions</a></p>
                    <div className="clearfix">
                        <button type='button' className="cancelbtn" >cancel</button>
                        <button type="submit" className="signupbtn">Signup</button>
                    </div>
                </div>
            </form>
            <Login/>
        </>
    )
}

const mapStateToprops = (state) => {
    return {
       userdetail:state.signupreducer.signupdeatil,
       signuperr: state.signupreducer.error,
    }
}
const mapDispatchToprops = (dispatch) =>{
    return {
        signupform:(username, email, password, password2) =>{
            dispatch(signupaction(username, email, password, password2))
        }
    }
}
export default connect(mapStateToprops, mapDispatchToprops) (Signup);