import Axios from 'axios';
import { getLocalStorage } from '@utils';

export const SERVER_URL = 'http://localhost:5000';

const theAxios = ({ url, type = 'get', param }) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const accessToken = getLocalStorage('token');
    if (accessToken !== null) {
        headers.Authorization = `Bearer${accessToken}`;
    }

    return Axios({
        method: type,
        url: `${SERVER_URL}${url}`,
        headers,
        data: param,
    });
};

export default theAxios;
