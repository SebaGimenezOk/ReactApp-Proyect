import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';
// import CardWidget from './CardWidget';


function Navegador() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light bg-light">
                <Container className='nav-nav'>
                    <div>
                        <Navbar.Brand href="#home"> <img src="../assets/logo-tipo-fav-blanco.png"
                            className="caja-logo"
                            alt="" /> </Navbar.Brand> </div>
                    <div className="menu-header">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#home">Producto</Nav.Link>
                        <Nav.Link href="#home">Contacto</Nav.Link>
                        <i class="bi bi-cart-plus-fill"></i>
                    </div> 
            <div> 
            {/* <CardWidget/> */}
            </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Navegador;