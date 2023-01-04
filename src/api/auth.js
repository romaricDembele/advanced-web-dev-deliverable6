import axios from 'axios';
const authenticate = (email, password) => {
    axios({
        method: 'post',
        url: 'api/auth/login',
        data: {
            email,
            password
        }
    })
        .then(response => console.log(response.status))
        .catch(err => console.log(err));
};
const register = (name, email, username, password) => {
    axios({
        method: 'post',
        url: 'api/auth/register',
        data: {
            name,
            email,
            username,
            password,
        }
    })
        .then(response => console.log(response.status))
        .catch(err => console.log(err));
};
export { authenticate, register };
