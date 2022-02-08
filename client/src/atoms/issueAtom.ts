import { atom, selector } from 'recoil';
import { fetchIssues } from '@apis';
import { IIssue } from '@types';

export const issuesFilterState = atom({
    key: 'issuesFilterState',
    default: 'SHOW_OPEN',
});

export const allIssuesSelector = selector<IIssue[]>({
    key: 'allIssuesSelector',
    get: async () => {
        const { data } = await fetchIssues().then((res: Response) => {
            if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
            return res.json();
        });

        return data;
    },
});

export const allIssuesAtom = atom<ILabel[]>({
    key: 'allIssues',
    default: allIssuesSelector,
});

export const issueStatusCountSelector = selector<number[]>({
    key: 'issueStatusCountSelector',
    get: ({ get }) => {
        const issues = get(allIssuesAtom);
        const openCount = issues.filter((issue: IIssue) => issue.status === 'open').length;
        const closeCount = issues.filter((issue: IIssue) => issue.status === 'close').length;
        return [openCount, closeCount];
    },
});

export const issueFilterSelector = selector<IIssue[]>({
    key: 'issueFilterSelector',
    get: ({ get }) => {
        const issues = get(allIssuesAtom);
        const filter = get(issuesFilterState);

        switch (filter) {
            case 'SHOW_ALL':
                return issues;
            case 'SHOW_OPEN':
                return issues.filter((issue: IIssue) => issue.status === 'open');
            case 'SHOW_CLOSE':
                return issues.filter((issue: IIssue) => issue.status === 'close');
            default:
                return issues;
        }
    },
});
