import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// bootstrap imports
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// action imports
import { logout } from 'actions';

const Header = () => {
  const dispatch = useDispatch();
  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Wetbat Travel</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {agentInfo ? (
                <NavDropdown
                  title={
                    <span>
                      <FontAwesomeIcon icon={['fas', 'user']} />{' '}
                      {`${agentInfo.fname} ${agentInfo.lname}`}
                    </span>
                  }
                  id='agentname'
                >
                  <NavDropdown.Item href='/dashboard'>
                    <FontAwesomeIcon icon={['fas', 'plane-departure']} />{' '}
                    Bookings
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    <FontAwesomeIcon icon={['fas', 'sign-out-alt']} /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to={'/login'}>
                  <Nav.Link>
                    <FontAwesomeIcon icon={['fas', 'user']} /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export { Header };
