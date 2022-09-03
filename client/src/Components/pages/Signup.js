import React from 'react';
//  import { Link } from 'react-router-dom';
//  import { useMutation } from '@apollo/client';
//  import { ADD_PROFILE } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Auth from '../utils/auth';




const Signup = () => {
 

  return (

    <Form className='signUp'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Create a Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
};

export default Signup;























