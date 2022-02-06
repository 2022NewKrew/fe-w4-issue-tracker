import { atom, selector } from 'recoil';
import { fetchIssues } from '@apis';
import { IIssue } from '@types';

export const issueListFilterState = atom({
    key: 'issueListFilterState',
    default: 'SHOW_OPEN',
});

export const allIssuesSelector = selector<IIssue[]>({
    key: 'allIssuesSelector',
    get: async ({ get }) => {
        const { data } = await fetchIssues().then((res: Response) => {
            if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
            return res.json();
        });
        const filter = get(issueListFilterState);

        switch (filter) {
            case 'SHOW_ALL':
                return data;
            case 'SHOW_OPEN':
                return data.filter((issue: IIssue) => issue.status === 'open');
            case 'SHOW_CLOSE':
                return data.filter((issue: IIssue) => issue.status === 'close');
        }

        return data;
    },
});

export const allIssuesAtom = atom<ILabel[]>({
    key: 'allIssues',
    default: allIssuesSelector,
});
