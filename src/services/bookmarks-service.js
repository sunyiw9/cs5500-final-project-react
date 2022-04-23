import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const Messages_API = `${BASE_URL}/api/messages`;


const api = axios.create({
    withCredentials: true
});


export const findAllMessagesBookmarkedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/bookmarks`)
        .then(response => response.data);

export const findAllUsersThatBookmarkedMessage = (mid) =>
    api.get(`${Messages_API}/${mid}/bookmarks`)
        .then(response => response.data);

export const userBookmarksMessage = (uid, mid) =>
    api.put(`${USERS_API}/${uid}/bookmarks/${mid}`)
        .then(response => response.data);