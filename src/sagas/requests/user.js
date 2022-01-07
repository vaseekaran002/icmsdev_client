import axios from 'axios';

export const requestSignInUser = async (login) => {
    return await axios.post("http://18.205.56.216:7070/auth/88eb970f-d7ea-49a7-9442-97e522135af5/signin", login);
}