import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: "localhost:3020"
});

export const API = {
    getPlayers() {
        return instance.get('players/')
    }
};