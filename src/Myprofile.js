import React, {useState, useContext, useEffect} from "react";
import {store} from './App';
import {Navigate} from 'react-router-dom';
import axios from "axios";
import Moment from "react-moment";


const Myprofile = () => {
  const[token,setToken] = useContext(store);
  const[data, setData] = useState(null);
  const[allmsg, setAllmsg] = useState([]);
  const[newmsg, setNewmsg] = useState("");
  useEffect(()=>{
     axios.get('https://mern-login-logout.herokuapp.com/myprofile',{
      headers:{
        'x-token': token
      }
     }).then(res => setData(res.data)).catch((err) => console.log(err))

     axios.get('https://mern-login-logout.herokuapp.com/getmsg',{
      headers:{
        'x-token': token
      }
     }).then(res => setAllmsg(res.data)).catch((err) => console.log(err))

  },[])
  
const handleSubmit = e=>{
  e.preventDefault();
  axios.post('https://mern-login-logout.herokuapp.com/addmsg',{text:newmsg},{
      headers:{
        'x-token': token
      }
     }).then(res => setAllmsg(res.data)).catch((err) => console.log(err))
}
  if(!token){
    return <Navigate to ='/login' />
}
  return (
    <div>
      { 
      data &&
    //     <center>
    //  <h1 >Welcome User : {data.username}</h1><br/>
      
    //   <button style={{background:"greenyellow"}} onClick={()=>setToken(null)}>Logout</button>
    //   </center>
    <center>
                <br />
                <div class="card" style={{"width": "38rem", "textAlign": "left"}}>
                
                <div class="card-body">
                  {
                    allmsg.length>=1 ?
                    allmsg.map(message =>
                      <div class="card">
                    <div class= "card body">
                  </div>
                    <h5 class="card-title">{message.username} <Moment style={{fontsize:"12px"}} format="hh:mm:ss">{message.date}</Moment></h5>
                    <p>{message.text}</p>
                    </div>)
                   :
                    <h1>Message Loading...</h1>
                  }
                  <form onSubmit={handleSubmit}>
                  <input type="text" onChange={e =>setNewmsg(e.target.value)}/>
                    <input type="submit" value="Send Message" />
                  </form>
                  <hr/>
                    <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
                    
                </div>
                </div>
            </center>
      }
    </div>
  )
}

export default Myprofile;

