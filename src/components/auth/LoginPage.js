import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';

import { GoogleLogin } from 'react-google-login';

const axios = require('axios');

const responseGoogle = (response) => {
    console.log(response);
    // const login = useLogin();
    // const notify = useNotify();
    const googleId = response.tokenId;
    // console.log(response.tokenId)
    axios.get('http://localhost:8080/test/user/login', {
        headers: {
            'Content-Type': 'application/json',
            'googleId': googleId,
        }
    }).then(function (response) {
        // log user in
        localStorage.setItem('googleId', response.tokenId)
        console.log(response);
        // login({googleId})
        // .catch(() => notify("Cannot login"))
    }).catch(function (error) {
        // send user back to login page and clear local storage
        console.log(error);
    })
}

const MyLoginPage = ({ theme }) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const googleId = localStorage.getItem('googleId')
    const login = useLogin();
    const notify = useNotify();
    console.log("login page")
    const submit = (e) => {
        console.log("submit")
        e.preventDefault();
        login({googleId})
            .catch(() => notify('Invalid email or password'));
    };

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={submit}>
                <GoogleLogin
                    clientId="463887251962-ftb58nofeg9tospgapjjsp0v3en1vmmq.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
                 {/* <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} /> */}
                 {/* <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
             </form>
            <Notification />
        </ThemeProvider>
    );
};

export default MyLoginPage;