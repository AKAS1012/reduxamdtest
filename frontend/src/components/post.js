import axios from 'axios';
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reqres = (props) =>{
  
    const [getResult,setResult]= useState([]);
    const url = "https://reqres.in/api/users?page=2"
   
    useEffect(()=>{
        axios.get(url)
        .then(res=> {
            console.log(res.data.data)
            setResult(res.data.data);
        })
        .catch((error)=> console.log(error))
    }, []);

  
    return(
        <div className={"container"} style={{border:'1px solid rgba(125 ,125, 125, 0.080)', margin:'5px', padding:'3px', direction:'row'}}>
            <h1> Users</h1>
            { 
            getResult.map((e,i)=>{
                
               return  ( <div className={"row"}>
                        <div className={"col col-md-4"} style={{display:'flex', direction:'row', margin:'3px'}}><p>{e.email}</p>
                        <p style={{margin:'10%', padding:'0%', display:'inline-flex', direction:'row,', width:'10%'}}><strong>{e.first_name}</strong></p>
                        <img src={e.avatar}/>
               </div>
               </div>
               )
            })
         } 
        </div>
    );
}
export default Reqres; 