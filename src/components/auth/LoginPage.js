import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';

import { GoogleLogin } from 'react-google-login';

const axios = require('axios');

// const ResponseGoogle = (response) => {
//     console.log(response);
//     const login = useLogin();
//     const notify = useNotify();
//     const googleId = response.tokenId;
//     // console.log(response.tokenId)
//     axios.get('http://localhost:8080/test/user/login', {
//         headers: {
//             'Content-Type': 'application/json',
//             'googleId': googleId,
//         }
//     }).then(function (response) {
//         // log user in
//         localStorage.setItem('googleId', response.tokenId)
//         console.log(response);
//         login({googleId})
//         .catch(() => notify("Cannot login"))
//     }).catch(function (error) {
//         // send user back to login page and clear local storage
//         console.log(error);
//     })
// }

const MyLoginPage = ({ theme }) => {
    const googleId = localStorage.getItem('googleId')
    const login = useLogin();
    const notify = useNotify();

    const responseGoogle = (response) => {
        localStorage.setItem('googleId', response.tokenId)

        axios.get('http://localhost:8080/test/user/login', {
            headers: {
                'Content-Type': 'application/json',
                'googleId': response.tokenId,
            }
        }).then(function (response) {
            // log user in
            login({ googleId })
                .catch(() => notify("Cannot login"))
        }).catch(function (error) {
            // send user back to login page and clear local storage
            console.log(error);
        })
    }

    return (
        // <ThemeProvider theme={theme}>
            <form>
                <GoogleLogin
                    clientId="463887251962-ftb58nofeg9tospgapjjsp0v3en1vmmq.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    // isSignedIn={true}
                />
                 {/* <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} /> */}
                 {/* <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
             </form>
            // <Notification />
        // </ThemeProvider>
    );
};

export default MyLoginPage;