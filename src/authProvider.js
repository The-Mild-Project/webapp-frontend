export default {
    // called when the user attempts to log in
    login: ({ googleId }) => {
        // console.log('login')
        localStorage.setItem('googleId', googleId);
        // accept all username/password combinations
        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        // console.log('logout')
        localStorage.removeItem('googleId');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        // console.log('checkerror')
        if (status === 401 || status === 403) {
            localStorage.removeItem('googleId');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        // console.log('checkAuth')
        return localStorage.getItem('googleId')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};