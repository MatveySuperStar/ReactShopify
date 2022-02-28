import React from 'react';
import {Form, FormLayout, TextField, Button} from '@shopify/polaris';
import { useSelector, useDispatch  } from 'react-redux';
import { addEmailAction, addFirstNameAction, addSecondNameAction, defaultUserAction } from '../../store/Reducers/userReducer';
import { addUserAction } from '../../store/Reducers/usersReducer';

const FormUsers = () => {
  const randomNumber = () => Math.floor(Math.random() * new Date())

  const user = Object.assign(useSelector(state => state.user.user), {id: randomNumber()});

  const dispatch = useDispatch(); 

  const setEmail = (event) => {
    dispatch(addEmailAction(event.target.value))
  }

  const setFirstName = (event) => {
    dispatch(addFirstNameAction(event.target.value))
  }

  const setSecondName = (event) => {
    dispatch(addSecondNameAction(event.target.value))
  }

  const handleSubmit = () => {
    dispatch(addUserAction(user))
    dispatch(defaultUserAction())
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout >
        <TextField
          value={user.email} label='Email' type="email"  onChange={() => setEmail(event)}
        />
        <FormLayout.Group>
          <TextField
            value={user.first_name}
            label = 'First name'
            onChange={() => setFirstName(event)}
          />
          <TextField
            value={user.last_name}
            label = 'Last name' 
            onChange={() => setSecondName(event)}
          />
        </FormLayout.Group>
        <Button submit primary>Submit</Button>
      </FormLayout>
    </Form>
  );
};

export default FormUsers;
