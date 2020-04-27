import React from 'react';
import { useLogin, useNotify } from 'react-admin';

import { GoogleLogin } from 'react-google-login';

const axios = require('axios');

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
        <form>
            <GoogleLogin
                clientId="463887251962-ftb58nofeg9tospgapjjsp0v3en1vmmq.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </form>
    );
};

export default MyLoginPage;