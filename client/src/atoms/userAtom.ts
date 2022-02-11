import { atom, selector } from 'recoil';
import { fetchUsers } from '@apis';
import { IUser } from '@types';

export const userInfoSelector = selector<IUser[]>({
    key: 'userInfoSelector',
    get: async () => {
        const res = await fetchUsers();
        if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
        const { data } = await res.json();
        return data;
    },
});

export const userInfoAtom = atom<IUser[]>({
    key: 'userInfoAtom',
    default: userInfoSelector,
});
