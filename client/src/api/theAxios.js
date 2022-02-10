import Axios from 'axios';
import { getLocalStorage } from '@utils';

export const SERVER_URL = 'http://localhost:5000';

const theAxios = ({ url, type = 'get', param }) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers':
            'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
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
