import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Badge,
    Form,
    DropdownButton,
    Dropdown,
    Button,
    InputGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>BEST ONLINE SHOP</Navbar.Brand>
                </LinkContainer>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                            <DropdownButton id="dropdown-basic-button" title="All">
                                <Dropdown.Item>Electronics</Dropdown.Item>
                                <Dropdown.Item>Cars</Dropdown.Item>
                                <Dropdown.Item>Books</Dropdown.Item>
                            </DropdownButton>

                            <Form.Control type="text" placeholder="Normal text" />
                            <Button variant="warning">
                                <i className="bi bi-search text-dark"></i>
                            </Button>
                        </InputGroup>
                    </Nav>

                    <Nav>
                        <LinkContainer to="/admin/orders">
                            <Nav.Link>
                                <div style={{ position: "relative" }}>
                                    Admin
                                    <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                                </div>
                            </Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                            <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My orders</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/user" as={Link} to="/user">My profile</NavDropdown.Item>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>

                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Badge pill bg="danger">2</Badge>
                                    <i className="bi bi-cart-dash ms-1"></i>
                                    <span className="ms-1">CART</span>
                                </div>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderComponent;
