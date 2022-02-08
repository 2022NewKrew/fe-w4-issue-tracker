import theAxios from './theAxios';

export const login = async (param) =>
    await theAxios({
        url: '/api/login',
        type: 'post',
        param,
    });

export const getUserInfo = async () =>
    await theAxios({
        url: '/api/users/auth',
        type: 'get',
    });
