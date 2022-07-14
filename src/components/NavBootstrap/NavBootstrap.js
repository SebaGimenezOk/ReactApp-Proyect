import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="noMeLaContainer">
                <Navbar.Brand href="#home">React-carrito </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Incio</Nav.Link>
                        <Nav.Link href="#link">Link base</Nav.Link>
                        <NavDropdown title="Desplegable" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Action2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Algo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Link Aparte
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;