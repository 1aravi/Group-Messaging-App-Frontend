import React, {useState} from "react";
import axios from "axios";

const Register = ()=>{
    const[data, setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''

    })

    const handleChange = e =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        axios.post(`https://mern-login-logout.herokuapp.com/register`, data)
        .then(
        res => alert(res.data)
        )
    }
return(
    <div>
        <center>
        <form onSubmit={handleSubmit} >
            <h1 style={{color:"blue"}}>Register</h1>
            <input type="text" size="40" onChange={handleChange} name="username" placeholder="User Name" style={{background:"greenyellow"}}/><br />
            <input type="email" size="40" onChange={handleChange} name="email" placeholder="Email" style={{background:"greenyellow"}}/><br />
            <input type="password" size="40" onChange={handleChange} name="password" placeholder="Password" style={{background:"greenyellow"}}/><br />
            <input type="password" size="40" onChange={handleChange} name="confirmpassword" placeholder="Confirm Password" style={{background:"greenyellow"}}/><br />
            <b><input type="submit" value="Register" style={{background:"rgb(172, 214, 230)"}}/></b><br />
        </form>
        </center>
    </div>
)
}
export default Register;