/**
 * @file Implement the message service from remote API
 */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Messages_API = `${BASE_URL}/api/messages`;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
      withCredentials: true
});

/**
 * Use POST method to let users send a message
 * @param uid Primary key of the user who sends the message
 * @param uid2 Primary key of the user who receives the message
 * @param message The content of the message
 * @returns {Promise<AxiosResponse<any>>} JSON file of the new message
 */
export const sendMessage = (uid, uid2, message) =>
    api.post(`${USERS_API}/${uid}/messages/${uid2}`, message)
        .then(response => response.data);

/**
 * Use GET method to retrieve all messages between two users
 * @param uid Primary key of User 1
 * @param uid2 Primary key of User 2
 * @returns {Promise<AxiosResponse<any>>} JSON file of all messages between the two users
 */
export const findAllMessagesBetweenUsers = (uid, uid2) =>
    api.get(`${USERS_API}/${uid}/messages/${uid2}`)
        .then(response => response.data);

/**
 * Use DELETE method to delete a instance of message
 * @param mid Message's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON of updated messages list
 */
export const deleteOneMessage = (mid) =>
    api.delete(`${Messages_API}/${mid}`)
        .then(response => response.data);

const service = {
    sendMessage,
    findAllMessagesBetweenUsers,
    deleteOneMessage
}

export default service;
