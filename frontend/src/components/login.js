import React from "react"

const Login = (props)=>{
    return(
        <>
        <form style={{border:'3px solid #f1f1f1', margin:'4%', padding:'5%', width:'40%', float:'right'}}>
        <div className="imgconatiner">
            {/* <img src="avatar" alt="avatar" style={{ width: '40%', borderRadius: '50%'}} className="avatar"></img> */}
            <h1 style={{margin:'4%'}}>Login Form</h1>
        </div>
        <div className="container" style={{padding:'16px'}}>
            <div>
            <label for="usname" ><b>username</b></label>
          <input type="text" value="name" style={{width:'100%', padding:"10px 12px", margin:'8px 0', display:'inline-block', border:"1px solid #ccc"}} placeholder="username" required></input>
          <label for='psw'><b>psw</b></label>
          <input type="text" value="password" style={{width:'100%', padding:"10px 12px", margin:'8px 0', display:'inline-block', border:"1px solid #ccc"}} placeholder="password" required></input>
          </div>
          <button type="submit" style={{backgroundColor:'#04AA6D', color:'white', padding:'12px 20px', margin:'8px 0', border:'none', cursor:'pointer', width:"100%"}}>Login</button>
          <label>
          <input type="checkbox" checked="checked" name="remember"></input>
          </label>
        </div>
        <div style={{margin:'1%', padding:'2%'}}>
            <button type="button" className="cancelbtn">cancel</button>
            <span className="psw" style={{margin:'2%'}}>Forget<a href="/">password?</a></span>
        </div>
        </form>
        </>
    )
}
export default Login;