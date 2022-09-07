
import React, { useState } from 'react';
  // import { Link } from 'react-router-dom';
  import { useMutation } from '@apollo/client';
  import { ADD_USER} from '../utils/mutations';
import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
import Auth from '../utils/auth';

import InputGroup from 'react-bootstrap/InputGroup';


const Signup = () => {
    const [formState, setFormState] = useState({
      
      firstName: '',
      lastName:'',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
 

  return (
<div style={{ backgroundColor: "#89cff0", display: 'flex',  justifyContent:'center', alignItems:'center', height: '600px', width: '1400px', padding: "90px 120px"}}>
  
{data ? (
     <p>
     Success!
   </p>

  ) : ( <Form className='loginStyle' >
        Login
        <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name"  onChange={handleChange} type="firstname" name="firstName" />
        <Form.Control aria-label="Last name" onChange={handleChange} type="lastname" name="lastName"  />
      </InputGroup>
    
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Create a Password</Form.Label>
          <Form.Control onChange={handleChange} type="password" name="password"  placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button  onClick={handleFormSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  
  
  
  )}
  
  {error && (
    <div className="my-3 p-3 bg-danger text-white">
      {error.message}
    </div>
  )}

</div>
  );
};

export default Signup;












