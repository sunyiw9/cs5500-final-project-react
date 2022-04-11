import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Messages_API = `${BASE_URL}/api/messages`;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
      withCredentials: true
});

export const sendMessage = (uid, uid2, message) =>
    axios.post(`${USERS_API}/${uid}/messages/${uid2}`, message)
        .then(response => response.data);

export const findAllMessagesBetweenUsers = (uid, uid2) =>
    axios.get(`${USERS_API}/${uid}/messages/${uid2}`)
        .then(response => response.data);

const service = {
    sendMessage,
    findAllMessagesBetweenUsers
}

export default service;
