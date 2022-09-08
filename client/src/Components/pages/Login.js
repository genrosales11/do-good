import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
import { LOGIN } from '../utils/mutations';
 import Auth from '../utils/auth';




const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
<div style={{ backgroundColor: "#89cff0", display: 'flex',  justifyContent:'center', alignItems:'center', height: '600px', width: '1400px', padding: "90px 120px"}}>
    <Form className='loginStyle'>
      Login
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control   value={formState.email} onChange={handleChange} type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
  
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control   value={formState.password} onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>
  
      <Button onClick={handleFormSubmit} variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
};

export default Login;




