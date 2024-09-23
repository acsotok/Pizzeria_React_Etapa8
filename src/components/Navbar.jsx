import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const  Navegation = () => {
    const {getTotal} = useContext(CartContext);
    const {user, logIn, LogOut} = useContext(UserContext);
    const buttonStyle = {fontSize:'10px'}
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
            <Nav className="me-auto " >
                <NavLink to="/" ><Button className="p-2" variant="outline-light" style={buttonStyle}> 🍕 Home</Button> </NavLink>
                {user && user.token ? (
                    <Button onClick={LogOut} variant="outline-light" style={buttonStyle}>🔒 Logout </Button>
                ) : (
                    <NavLink to="/login">
                        <Button onClick={logIn} variant="outline-light" style={buttonStyle}>🔒 Login </Button>
                    </NavLink>
                )}
                {user && user.token ? (
                    <NavLink to="/Profile" ><Button variant="outline-light" style={buttonStyle}>🔒 Profile</Button>
                    </NavLink>
                ) : (
                    <NavLink to="/register" ><Button variant="outline-light" style={buttonStyle}>🔒 Register</Button>
                    </NavLink>
                )}
            </Nav>
        </Container>
            <Form className="p-2 ms-auto">
                <Link to="cart" ><Button variant="outline-info" style={buttonStyle}> 🛒 Total: ${getTotal()}</Button>
                </Link>
            </Form>
    </Navbar>
  )
}

export default Navegation