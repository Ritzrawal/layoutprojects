import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import './navigation.css'
  import Icon from '@material-ui/core/Icon';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faInfinity,faCoffee,faCircle } from '@fortawesome/free-solid-svg-icons'
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="Navigation" light expand="md">
          <NavbarBrand href="/">
          <Icon>star</Icon>
          <FontAwesomeIcon icon={faCoffee}/>
              <text className="TextStyle">LOGO</text>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="TextStyle" href="/components/">
                <text className="TextStyle">Forex</text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextStyle" href="/components/">
                <text className="TextStyle">Commodities</text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextStyle" href="/components/">
                <text className="TextStyle">Indices</text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextStyle" href="/components/">
                <text className="TextStyle">Stocks</text>

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextStyle" href="/components/">
                <FontAwesomeIcon style={{color:'#C0C0C0'}} icon={faInfinity} />

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextStyle" href="/components/">
                <FontAwesomeIcon style={{color:'#C0C0C0	'}} icon={faBell}/>
                {/* <NotificationsIcon style={{color:"#fff"}}/> */}

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextStyle" href="/components/">
                <FontAwesomeIcon  size="lg"style={{color:'#020210'}} icon={faCircle} />

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="https://github.com/reactstrap/reactstrap" className="">
                    <text className="TextStyle">Komal Poudyal</text></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}