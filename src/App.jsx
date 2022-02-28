import React, {useEffect} from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import Table from './Components/Table/Table';
import MyModalForm from './Components/Modal/MyModalForm';
import '@shopify/polaris/build/esm/styles.css';
import { useDispatch } from 'react-redux';
import { addUsersAction } from './store/Reducers/usersReducer';
import FormUsers from './Components/Forms/FormUsers';;


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, [])

  async function getUsers() {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const people = await response.json()
    dispatch(addUsersAction(people.data))
  }

  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Form Users">
        <Card sectioned>
          <FormUsers />
        </Card>
      </Page>
      <Table />
      <MyModalForm />
    </AppProvider>
  );
};

export default App;