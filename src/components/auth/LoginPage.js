import React from 'react';
import { useLogin, useNotify } from 'react-admin';

import { GoogleLogin } from 'react-google-login';

const axios = require('axios');
// const googleClientId = process.env.GOOGLE_CLIENT_ID;

const MyLoginPage = ({ theme }) => {
    const login = useLogin();
    const notify = useNotify();

    const responseGoogle = (response) => {
        localStorage.googleId = response.tokenId
        axios.get(process.env.REACT_APP_DATA_PROVIDER + '/user/login', {
            headers: {
                'Content-Type': 'application/json',
                'googleId': response.tokenId,
            }
        }).then(function (response) {
            // log user in
            let googleId = localStorage.getItem('googleId')
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
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </form>
    );
};

export default MyLoginPage;