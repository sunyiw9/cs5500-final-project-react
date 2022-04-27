/**
 * @file Implement the bookmark service from remote API
 */

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const Messages_API = `${BASE_URL}/api/messages`;
const Bookmarks_API = `${BASE_URL}/api/bookmarks`;


const api = axios.create({
    withCredentials: true
});


/**
 * Use GET method to retrieve all bookmarked message by a user
 * @param userId User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of bookmarked messages
 */
export const findAllMessagesBookmarkedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/bookmarks`)
        .then(response => response.data);

/**
 * User GET method to retrieve all users who bookmarked a same message
 * @param mid Message's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of users
 */
export const findAllUsersThatBookmarkedMessage = (mid) =>
    api.get(`${Messages_API}/${mid}/bookmarks`)
        .then(response => response.data);


/**
 * Use PUT method to insert a new instance of user bookmarks a message
 * @param uid User's primary key
 * @param mid Message's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of a user bookmarks a message
 */
export const userBookmarksMessage = (uid, mid) =>
    api.put(`${USERS_API}/${uid}/bookmarks/${mid}`)
        .then(response => response.data);

/**
 * Use GET method to retrieve a message from this user's bookmarks collection (and
 * the purpose is check if this message is in the bookmarks collection)
 * @param uid User's primary key
 * @param mid Message's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of a bookmarked message
 */
export const findBookmarkByUserAndMessage = (uid, mid) =>
    api.get(`${Bookmarks_API}/users/${uid}/messages/${mid}`)
        .then(response => response.data);