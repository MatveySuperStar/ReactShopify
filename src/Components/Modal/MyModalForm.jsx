import React, {useState, useCallback, useEffect} from 'react';
import {Button, Modal, Form, FormLayout, TextField} from '@shopify/polaris';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { activateAction } from '../../store/Reducers/activateReducer';
import { addSelectEmailAction, addSelectFirstNameAction, addSelectSecondNameAction } from '../../store/Reducers/selectUserReducer';
import { editUserAction } from '../../store/Reducers/usersReducer';

const MyModalForm = () => {
  const active = useSelector(state => state.activate.activate)
  const selectUser = useSelector(state => state.selectUser.selectUser)

  const dispatch = useDispatch()

  const handleChange = useCallback(() => dispatch(activateAction()))

  
  const setEmail = (event) => {
    dispatch(addSelectEmailAction(event.target.value))
  }

  const setFirstName = (event) => {
    dispatch(addSelectFirstNameAction(event.target.value))
  }

  const setSecondName = (event) => {
    dispatch(addSelectSecondNameAction(event.target.value))
  }

  const handleSubmit = () => {
    handleChange()
    dispatch(editUserAction(selectUser))
  }

  return (
    <div style={{height: '500px'}}>
      <Modal
        open={active}
        onClose={handleChange}
        title="Reach more shoppers with Instagram product tags"
      >
        <Modal.Section>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                value={selectUser.email}
                label = 'Email' 
                type="email" 
                autoComplete="email"
                onChange={() => setEmail(event)}
              />
              <TextField
                value={selectUser.first_name}
                label = 'First name'
                onChange={() => setFirstName(event)}
              />
              <TextField
                value={selectUser.last_name}
                label = 'Last name' 
                onChange={() => setSecondName(event)}
              />
              <Button submit>Submit</Button>
            </FormLayout>
          </Form>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default MyModalForm;