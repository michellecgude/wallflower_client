// The main file that contains our connection to our API for when we need to call it.

const authURL = 'https://wallflower-serverside.herokuapp.com/'

const axiosAuth = axios.create({
    baseURL: authURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
})