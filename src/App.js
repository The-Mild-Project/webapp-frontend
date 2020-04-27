// in src/App.js
import React from 'react';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import { UserList } from './users';
// import yelpProvider from "./yelpProvider";

import MyLoginPage from './components/auth/LoginPage'
import MyLogoutButton from './components/auth/LogoutButton'

const httpClient = (url, options = {}) => {
   if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
   }

   options.headers.set('googleId', 'test-123456');
   return fetchUtils.fetchJson(url, options);
};

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:8080/test', httpClient);
const App = () => (
   <Admin loginPage={MyLoginPage} logoutButton={MyLogoutButton} dataProvider={dataProvider} authProvider={authProvider}>
   {/* <Admin dataProvider={dataProvider} authProvider={authProvider}> */}
      <Resource name="user/all" list={UserList} options={{ label: 'Users' }} />
      <Resource name="restaurant/all" list={ListGuesser} options={{ label: 'Restaurants' }} />
   </Admin>
);
export default App;