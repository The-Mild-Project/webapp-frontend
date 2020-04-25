import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid key={props._id} rowClick="edit">
            <EmailField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="admin" />
        </Datagrid>
    </List>
);