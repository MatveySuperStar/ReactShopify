import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateAction } from '../../store/Reducers/activateReducer';
import {Page, Card, DataTable, Button} from '@shopify/polaris';
import { deleteUserAction } from '../../store/Reducers/usersReducer';
import { addSelectUserAction } from '../../store/Reducers/selectUserReducer';

const Table = () => {

  const users = useSelector(state => state.users.users)

  const dispatch = useDispatch();

  const activateModal = (user) => {
    dispatch(activateAction())
    dispatch(addSelectUserAction(user))
  }

  const deletePost = useCallback((id) => {
    dispatch(deleteUserAction(id))
  })

  const rows = [
    ...users.map( user => {
      return [
        user.email,
        user.first_name,
        user.last_name, 
        <Button onClick={() => activateModal(user)} primary>Edit</Button>, 
        <Button onClick={() => deletePost(user.id)}destructive>Delete</Button>]
    })
  ];

  return (
    <Page title="Users table">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'button',
            'button'
          ]}
          headings={[
            'Emai',
            'First name',
            'Last name',
            'Edit',
            'Delete'
          ]}
          rows={rows}
          />
      </Card>
    </Page>
  );
}

export default Table;

