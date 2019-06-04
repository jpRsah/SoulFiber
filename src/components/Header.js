import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo320.png';
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
  width: 163px;
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
              <NavItem>
                  <Link className="nav-link"to="/price">Цены</ Link>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Виды занятий
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <Link style={{ textAlign: `right`}} className="nav-link ta_r" to="/robot">Робототехника и программирование</Link>
                  </DropdownItem>
                  <DropdownItem>
                      <Link style={{ textAlign: `right`}} className="nav-link ta_r" to="/break-dance">Брейк данс</Link>
                  </DropdownItem>
                  <DropdownItem>
                      <Link style={{ textAlign: `right`}} className="nav-link ta_r" to="/logopedia">Логопед</Link>
                  </DropdownItem>
                  <DropdownItem>
                      <Link style={{ textAlign: `right`}} className="nav-link ta_r" to="/chess">Шахматы</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <NavItem>
                  <Link className="nav-link"to="/calendar">Расписание</ Link>
              </NavItem>
              {/* <NavItem>
                  <Link style={{ textAlign: `right`}} className="nav-link ta_r" to="/terms/oferta">Оферта</Link>
              </NavItem> */}
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
