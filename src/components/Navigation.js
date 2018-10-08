import React, { Component } from 'react';
import LogInForm from './LogInForm'
import { Button , Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
          <div className="row" className="Navbar">
            <Router>
                <Navbar dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>LuckyRead</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <a class="nav-link" href="/">Inicio</a>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Ayuda</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Nosotros</NavLink>
                          </NavItem>

                        </NavbarNav>
                        <NavbarNav left>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Introduce tu busqueda" aria-label="Search"/>
                            <Button className="Search-button" outline color="secondary">Buscar</Button>
                            </form>
                          </NavItem>
                          </NavbarNav>

                        <NavbarNav left >
                          <NavItem>
                            <Dropdown >
                                <DropdownToggle nav caret>Iniciar Sesion</DropdownToggle>
                              <DropdownMenu className="DropdownMenu" >
                                    <LogInForm/>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
            </div>
        );
    }
}
export default Navigation
