import axios from 'axios';

const User = (props) =>{
    axios.get("https://reqres.in/api/users/", {

    })
    .then((res)=>{
        console.log(res.data)
})
.catch((err)=>{
    console.log(err)
})
    
   axios.post("https://reqres.in/api/users/",{

    })
    .then((res)=>{
        console.log(res.data)
})
.catch((err)=>{
    console.log(err)
})
    axios.delete("https://reqres.in/api/users/",{

    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log('err')
    })
}

export default User;