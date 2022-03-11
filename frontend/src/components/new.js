import { useEffect, useState } from "react";
import axios from "axios";

const New = (props) =>{

    useState [getResult, setResult] = useState([])
    
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2")
        .then((res)=>{
            console.log(res.data)
            setResult(res.data)
        })
        .catch((err)=>(console,log(err)))
    }, []);
return(
    <div>
        <h1>Hellow Reqres</h1>
        <div>
        {
         setResult.map((e,i)=>{
             console.log(e);
             return <div><p>{e.email}</p></div>

         })
        }
        </div>
    </div>
)
}
export default New;