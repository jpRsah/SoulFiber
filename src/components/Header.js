import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo-320x118.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 203px;
  position: absolute;
  top: 0;
  left: 16px;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
              <Link className="navbar-brand" to="/">
                <LogoImage src={logo} alt="Soul Fiber" />
              </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link className="nav-link"to="/">Главная</ Link>
              </NavItem>
              <NavItem>
                  <Link className="nav-link"to="/news">Новости</ Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Виды занятий
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <Link style={{ textAlign: `right`}} className="nav-link ta_r" to="/english">Английский язык</Link>
                  </DropdownItem>
                  <DropdownItem>
                      <Link style={{ textAlign: `right`}} className="nav-link ta_r" to="/page-2">Брейк данс</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                  <Link className="nav-link"to="/calendar">Расписание</ Link>
              </NavItem>
              <NavItem>
                  <Link className="nav-link"to="/contacts">Контакты</ Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}
