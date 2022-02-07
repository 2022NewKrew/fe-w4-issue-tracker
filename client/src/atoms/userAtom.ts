import { atom, selector } from 'recoil';
import { fetchUsers } from '@apis';
import { IUser } from '@types';

export const userInfoSelector = selector<IUser[]>({
    key: 'userInfoSelector',
    get: async () => {
        const { data } = await fetchUsers().then((res: Response) => {
            if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
            return res.json();
        });
        return data;
    },
});

export const userInfoAtom = atom<IUser[]>({
    key: 'userInfoAtom',
    default: userInfoSelector,
});
