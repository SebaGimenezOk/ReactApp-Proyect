import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navegador() {
    return (
        <>
            <Navbar className="nav-nav container">
                <Container>
                <Navbar.Brand  href="#home">
                        <img src="../assets/logo 500 a transp.png"
                            className="caja-logo"
                            alt="" /> </Navbar.Brand>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                   
                </Container>
            </Navbar>
            </>
    );
}

export default Navegador;