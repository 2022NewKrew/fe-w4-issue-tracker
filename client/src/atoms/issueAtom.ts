import { atom, selector } from 'recoil';
import { fetchIssues } from '@apis';
import { IIssue, IFieldFilterState, ILabeling, issueFilterType } from '@types';
import {
    UNSET,
    UNSET_ARRAY,
    ISSUE_WITHOUT_FIELD,
    ISSUE_WITHOUT_LABEL,
} from '@types/globalConstants';

export const issuesFilterState = atom({
    key: 'issuesFilterState',
    default: 'SHOW_OPEN',
});

export const allIssuesSelector = selector<IIssue[]>({
    key: 'allIssuesSelector',
    get: async () => {
        const res = await fetchIssues();
        if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
        const { data } = await res.json();
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
        assignee: UNSET,
        label: UNSET_ARRAY,
        milestone: UNSET,
        author: UNSET,
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
                    if (fieldFilter.assignee === ISSUE_WITHOUT_FIELD)
                        // 담당자가 없는 이슈
                        return issue.assignments === undefined;

                    let issueAssignees: number[] = [];
                    if (issue.assignments)
                        issueAssignees = issue.assignments.map((assignment) => assignment.userId);
                    return (
                        fieldFilter.assignee === UNSET ||
                        issueAssignees.includes(fieldFilter.assignee)
                    );
                case 'label':
                    if (!issue.labelings) return false;
                    if (fieldFilter.label === ISSUE_WITHOUT_LABEL)
                        return issue.labelings.length === 0;
                    const issueLabelingIds = issue.labelings.map(
                        (labeling: ILabeling) => labeling.labelId
                    );
                    return fieldFilter.label.reduce(
                        (result: boolean, curLabelId) =>
                            issueLabelingIds.includes(curLabelId) && result,
                        true
                    );
                case 'milestone':
                    if (fieldFilter.milestone === ISSUE_WITHOUT_FIELD)
                        return issue.milestoneId === undefined;
                    return (
                        fieldFilter.milestone === UNSET ||
                        fieldFilter.milestone === issue.milestoneId
                    );
                case 'author':
                    return fieldFilter.author === UNSET || fieldFilter.author === issue.userId;
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
        const issues = get(issueFieldFilterSelector);
        const openCount = issues.filter((issue: IIssue) => issue.status === 'open').length;
        const closeCount = issues.filter((issue: IIssue) => issue.status === 'close').length;
        return [openCount, closeCount];
    },
});

export const issueFilterSelector = selector<IIssue[]>({
    key: 'issueFilterSelector',
    get: ({ get }) => {
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
