import React from "react";
import { useGlobals } from "../contexts/Global";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import { NavStyled, Logo, LinkStyled } from "./HeaderStyle.js";
import { withRouter } from "react-router-dom";

import logo from "../assets/images/logo-vblogv-small.png";

export function Header(props) {
  const { pathname } = props.location;
  const [{ theme }, dispatch] = useGlobals();

  const changeTheme = () => {
    dispatch({
      type: "changeTheme",
      newTheme: theme === "dark" ? "light" : "dark"
    });
  };

  return (
    <NavStyled expand="lg">
      {pathname !== "/" ? (
        <LinkStyled to="/" className="mr-0">
          <Logo src={logo} />
        </LinkStyled>
      ) : null}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-2 mr-auto">
          <LinkStyled className="px-4" to="/explore">
            Explore
          </LinkStyled>
          <LinkStyled className="px-4" to="/category/react">
            React
          </LinkStyled>
          <LinkStyled className="px-4" to="/contact">
            Contact
          </LinkStyled>
          <LinkStyled className="px-4" to="/about">
            About
          </LinkStyled>
        </Nav>
        <Nav className="mr-4">
          <Nav.Link className="text-white" href="#home" onClick={changeTheme}>
            Dark
          </Nav.Link>
          <Nav.Link className="text-white" href="#home" onClick={changeTheme}>
            Light
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="🔎" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </NavStyled>
  );
}

export default withRouter(Header);
