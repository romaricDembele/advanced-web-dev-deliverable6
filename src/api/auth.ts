import axios from 'axios';

const authenticate = (email :String, password: String) => {
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
}

const register = (name: String, email: String, username: String, password: String) => {
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
}

export {
    authenticate,
    register
}