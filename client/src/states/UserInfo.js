import { atom, selector } from 'recoil';

// export const userInfoSelector = selector({
//     key: 'userInfoSelector',
//     get: async ({ get }) => {
//         const data = await getUserInfo();
//         console.log(data);
//         return data;
//     },
// });

export const userInfoSelector = atom({
    key: 'userInfoSelector',
    default: {
        _id: '',
        name: '',
        email: '',
        image: '',
    },
});
