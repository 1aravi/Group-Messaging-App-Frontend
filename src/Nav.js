// import React, {useState, useContext} from 'react';
// import {Link} from 'react-router-dom';
// import {store} from './App';

// import Container from 'react-bootstrap/Container';

// const Nav = ()=>{
//     const[token,setToken] = useContext(store);
//     return(
        
//         <div>
            
//             {/* <Navbar bg="dark" variant="light">
//         <Container style={{background:"red"}}>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}
// <Container style={{background:"pink"}}>

//             {!token &&
//             <ul>
//                 <Link to ='/register'><li><b>Register</b></li></Link>
//                 <Link to ='/login'><li><b>Login</b></li></Link>
//             </ul>
            
//                }
               
               
//            </Container>
//         </div>
        
//     )

// }
// export default Nav;


import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import { store } from './App';

const Nav = () => {
    const [token,setToken] = useContext(store)
    return (
        <div>
          {!token ?
            <div>
            
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <center style={{paddingTop:"100px"}}><b style={{background: "rgb(173, 226, 181)", width: "250px"}}>
              Welcome to the Group Messaging App</b></center><br/><br/>
              
              <form class="form-inline my-2 my-lg-0">
                
                <ul  style={{width: "250px"}}>
                <center><button style={{background: "rgb(172, 214, 230)", width: "250px"}}><Link to='/register'><b>Register</b></Link></button></center><br/>
                <center><button style={{background: "rgb(172, 214, 230)", width: "250px"}}><Link to='/login' ><b>Login</b></Link></button></center>
                </ul>
                
                </form>
                
            </div>
          
             </div>
            :
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
}

        </div>
    )
}

export default Nav
