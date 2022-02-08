import { atom, selector } from 'recoil';
import { fetchIssues } from '@apis';
import { IIssue, IFieldFilterState } from '@types';

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

export const allIssuesAtom = atom<IIssue[]>({
    key: 'allIssues',
    default: allIssuesSelector,
});

export const issueFieldFilterState = atom<IFieldFilterState>({
    key: 'issueFieldFilterState',
    default: {
        assignee: -1,
        label: [],
        milestone: -1,
        author: -1,
    },
});

export const issueFieldFilterSelector = selector<IIssue[]>({
    key: 'issueFieldFilterSelector',
    get: ({ get }) => {
        const issues = get(allIssuesAtom);
        const fieldFilter = get(issueFieldFilterState);
        const isMatchWithFieldFilter = (issue: IIssue, fieldType: issueFilterType) => {
            switch (fieldType) {
                case 'assignee':
                    return true; // [TODO] 서버에서 assignee 연결 후 로직 수정
                case 'label':
                    if (fieldFilter.label.length === 0) return true; // 필터링할 라벨이 없으면 무조건 true
                    if (!issue.labelings) return false;
                    const issueLabelingIds = issue.labelings.map(
                        (labeling: ILabeling) => labeling.labelId
                    );
                    return fieldFilter.label.reduce(
                        (result: boolean, curLabelId) =>
                            issueLabelingIds.includes(curLabelId) && result,
                        true
                    );
                case 'milestone':
                    return (
                        fieldFilter.milestone === -1 || fieldFilter.milestone === issue.milestoneId
                    );
                case 'author':
                    return fieldFilter.author === -1 || fieldFilter.author === issue.userId;
            }
        };

        return issues.filter((issue) =>
            Object.keys(fieldFilter).reduce(
                (result: boolean, fieldType) => result && isMatchWithFieldFilter(issue, fieldType),
                true
            )
        );
    },
});

export const issueStatusCountSelector = selector<number[]>({
    key: 'issueStatusCountSelector',
    get: ({ get }) => {
        // const issues = get(allIssuesAtom);
        const issues = get(issueFieldFilterSelector);
        const openCount = issues.filter((issue: IIssue) => issue.status === 'open').length;
        const closeCount = issues.filter((issue: IIssue) => issue.status === 'close').length;
        return [openCount, closeCount];
    },
});

export const issueFilterSelector = selector<IIssue[]>({
    key: 'issueFilterSelector',
    get: ({ get }) => {
        // const issues = get(allIssuesAtom);
        const issues = get(issueFieldFilterSelector);
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
