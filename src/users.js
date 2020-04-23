import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

// const axios = require('axios')

// const getAllUsers = (repsonse) => {
//     console.log("users")
//     axios.get('http://localhost:8080/test/user/login', {
//         headers: {
//             'Content-Type': 'application/json',
//             'googleId': localStorage.get('googleId'),
//         }
//     }).then(function (repsonse) {
//         return repsonse
//     })
// }

export const UserList = props => (
    <List {...props}>
        <Datagrid key={props._id} rowClick="edit">
            <EmailField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
        </Datagrid>
    </List>
);

// export default getAllUsers;