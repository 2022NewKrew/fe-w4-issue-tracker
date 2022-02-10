import { atom } from 'recoil';

export const userInfoSelector = atom({
    key: 'userInfoSelector',
    default: {
        _id: '',
        name: '',
        email: '',
        image: '',
    },
});
