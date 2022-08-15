import React, {useState, useContext, useEffect} from "react";
import {store} from './App';
import {Navigate} from 'react-router-dom';
import axios from "axios";


const Myprofile = () => {
  const[token,setToken] = useContext(store);
  const[data, setData] = useState(null);
  useEffect(()=>{
     axios.get('https://mern-login-logout.herokuapp.com/myprofile',{
      headers:{
        'x-token': token
      }
     }).then(res => setData(res.data)).catch((err) => console.log(err))
  },[])

  if(!token){
    return <Navigate to ='/login' />
}
  return (
    <div>
      { 
      data &&
        <center>
     <h1 >Welcome User : {data.username}</h1><br/>
      
      <button style={{background:"greenyellow"}} onClick={()=>setToken(null)}>Logout</button>
      </center>
      }
    </div>
  )
}

export default Myprofile;

