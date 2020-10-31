import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// bootstrap imports
import { Form, Button } from 'react-bootstrap';
// component imports
import { FormContainer, Loader, Message } from 'components';
// action imports
import { login } from 'actions';

const LoginView = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const agentLogin = useSelector((state) => state.agentLogin);
  const { loading, error, agentInfo } = agentLogin;
  const redirect = location.search
    ? location.search.split('=')[1]
    : '/dashboard';

  useEffect(() => {
    if (agentInfo) {
      history.push(redirect);
    }
  }, [agentInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Sign In
          </Button>
        </Form>
      )}
    </FormContainer>
  );
};

export { LoginView };
