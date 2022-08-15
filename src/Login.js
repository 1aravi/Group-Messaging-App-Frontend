import React, {useState, useContext} from "react";
import axios from "axios";
import {store} from './App';
import {Navigate} from 'react-router-dom';
const Login = ()=>{
    const[token,setToken] = useContext(store);
    const[data, setData] = useState({
        email:'',
        password:'',
        

    })

    const handleChange = e =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        axios.post(`https://mern-login-logout.herokuapp.com/login`, data)
        .then(
        res => setToken(res.data.token)
        )
    }
    if(token){
        return <Navigate to ='/myprofile' />
        
    }
return(
    <div>
        <center>
        <form onSubmit={handleSubmit} autoComplete="off" >
            <h1 style={{color:"green"}}>Login</h1>
            <input type="email" size="40" onChange={handleChange} name="email" placeholder="Email" style={{background:"aqua"}}/><br />
            <input type="password" size="40" onChange={handleChange} name="password" placeholder="Password" style={{background:"aqua"}}/><br />
            <br />
            <input type="submit" value="Login" style={{background:"yellow"}}/>
        </form>
        </center>
    </div>
)
}
export default Login;