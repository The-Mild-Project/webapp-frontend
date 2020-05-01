import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const PreferencesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <EmailField source="id" />
            <TextField source="food" />
        </Datagrid>
    </List>
);