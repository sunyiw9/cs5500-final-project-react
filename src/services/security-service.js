import axios from "axios";
// const BASE_URL = "https://cs5500-01-sp22.herokuapp.com/api";
// const BASE_URL = "http://localhost:4000/api";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const SECURITY_API = `${BASE_URL}/api/auth`;

const api = axios.create({
    withCredentials: true
});

/**
 * Use post to create a new user
 * @param user User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of user
 */
export const register = (user) =>
    api.post(`${SECURITY_API}/register`, user)
        .then(response => response.data);

/**
 * Use post to login the user
 * @param user User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of user
 */
export const login = (user) =>
    api.post(`${SECURITY_API}/login`, user)
        .then(response => response.data);

/**
 * Use logout to log user out
 * @param user User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of user
 */
export const logout = (user) =>
    api.post(`${SECURITY_API}/logout`, user)
        .then(response => response.data);

/**
 * Use post to go to profile
 * @returns {Promise<AxiosResponse<any>>} profile data
 */
export const profile = () =>
    api.post(`${SECURITY_API}/profile`)
        .then(response => response.data);