import { Nav, Navbar, Button } from "react-bootstrap";
import logo from "../assets/Josephmark_1.png";
import profile from "../assets/Profile.png";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
function Navigation() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="dark">
              <Link to="/" className="link">
                POKEDEX
              </Link>
            </Button>
            <Button variant="dark">
              <Link to="/party" className="link">
                PARTY
              </Link>
            </Button>
            <img src={profile} alt="profile" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
