import { atom } from 'recoil';
import { IFilterInfo } from '@types';

const defaultStatusInfo: IFilterInfo[] = [
    {
        id: 0,
        name: '선택한 이슈 열기',
    },
    {
        id: 1,
        name: '선택한 이슈 닫기',
    },
];

export const statusInfoAtom = atom<IFilterInfo[]>({
    key: 'statusInfoAtom',
    default: defaultStatusInfo,
});
