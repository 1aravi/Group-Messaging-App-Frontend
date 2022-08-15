import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {store} from './App';

import Container from 'react-bootstrap/Container';

const Navi = ()=>{
    const[token,setToken] = useContext(store);
    return(
        
        <div>
            
            {/* <Navbar bg="dark" variant="light">
        <Container style={{background:"red"}}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
<Container style={{background:"pink"}}>

            {!token &&
            <ul>
                <Link to ='/register'><li><b>Register</b></li></Link>
                <Link to ='/login'><li><b>Login</b></li></Link>
            </ul>
            
               }
               
               
           </Container>
        </div>
        
    )

}
export default Navi;



