import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../actions/userActions';

function Header() {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {  userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/')
      };

    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        TODO
                    </Link>
                </Navbar.Brand>
                <Nav >
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />

                    </Form>
                </Nav>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" className='rightnav'>
                    <Nav
                        className="m-auto my-2 my-lg-0 rightnavchild"
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link to='/mynotes'>
                                My notes
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Amit Dutta" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHandler}>
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;