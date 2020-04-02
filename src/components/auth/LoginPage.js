import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';

import { GoogleLogin } from 'react-google-login';

const axios = require('axios');

const responseGoogle = (response) => {
    console.log(response);
    // console.log(response.tokenId)
    axios.get('http://localhost:8080/myapp/myresource', {
        headers: {
            // 'Access-Control-Allow-Origin': 'http://localhost:8080',
            // 'Access-Control-Allow-Credentials': 'true',
            // 'Access-Control-Allow-Headers': 'origin, content-type, accept, authorization',
            // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
            'Content-Type': 'application/json',
            'googleId': response.tokenId,
        }
    }).then(function (response) {
        // log user in
        localStorage.setItem('googleId', response.tokenId)
        console.log(response);
    }).catch(function (error) {
        // send user back to login page and clear local storage
        console.log(error);
    })
}

const MyLoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = (e) => {
        e.preventDefault();
        login({ email, password })
            .catch(() => notify('Invalid email or password'));
    };

    return (
        // <ThemeProvider theme={theme}>
            <GoogleLogin
                clientId="463887251962-ftb58nofeg9tospgapjjsp0v3en1vmmq.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            // {/* <form onSubmit={submit}>
            //     <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            //     <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            // </form>
            // <Notification /> */}
        // </ThemeProvider>
    );
};

export default MyLoginPage;