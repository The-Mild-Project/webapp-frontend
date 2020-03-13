// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import { UserList } from './users';
import yelpProvider from "./yelpProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
     <Admin dataProvider={yelpProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="restaurants" list={ListGuesser} />
     </Admin>
);
export default App;