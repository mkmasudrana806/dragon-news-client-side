import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleToLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar
        className="mb-4"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Trending</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button onClick={handleToLogOut} variant="light">
                      Log Out
                    </Button>{" "}
                    
                  </>
                ) : (
                  <>
                    <Link className="me-2 fs-5" to="/login">Login</Link>
                    <Link className="me-2 fs-5" to="/register">Register</Link>
                  </>
                )}
              </>
              <Link to="/profile">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUserCircle className="fs-5"></FaUserCircle>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
