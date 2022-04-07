import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Messages_API = `${BASE_URL}/api/messages`;

const api = axios.create({
    withCredentials: true
});

