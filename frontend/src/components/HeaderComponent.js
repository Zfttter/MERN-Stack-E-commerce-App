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
    return (//react模版 粘贴自 https://react-bootstrap.netlify.app/docs/components/navbar
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"> {/*3. 桥梁组件*/}
                    <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
                </LinkContainer>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <InputGroup>

                            <DropdownButton id="dropdown-basic-button" title="All">
                                <Dropdown.Item>Electronics</Dropdown.Item>
                                <Dropdown.Item>Cars</Dropdown.Item>
                                <Dropdown.Item>Books</Dropdown.Item>
                            </DropdownButton>

                            <Form.Control type="text" placeholder="Normal text" /> {/*创建一个文本输入框*/}

                            <Button variant="warning">
                                <i className="bi bi-search text-dark"></i> {/*导入一个search模样的icon*/}
                            </Button>
                        </InputGroup>

                    </Nav>
                    <Nav>{/*给管理员一个入口，跳转到 /admin/orders 管理后台页面*//} {/*用户导航逻辑 4*/}
                        <LinkContainer to="/admin/orders"> 
                            <Nav.Link>
                                Admin
                                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                            </Nav.Link>
                        </LinkContainer>

                        {/*用户下拉菜单*/}
                        <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                            <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My orders</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/user" as={Link} to="/user">My profile </NavDropdown.Item>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>

                        {/*未登录用户看到的导航，允许登录或注册*/}
                        <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                        <LinkContainer to="/register"><Nav.Link>Register</Nav.Link></LinkContainer>

                        {/*购物车按钮*/}
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <Badge pill bg="danger">
                                    2
                                </Badge>
                                <i className="bi bi-cart-dash"></i>
                                <span className="ms-1">CART</span>
                            </Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderComponent;