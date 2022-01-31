declare module '@types' {
    type issueStatus = 'open' | 'close';
    interface ITabElement {
        icon: string;
        title: string;
        count: number;
        isLast?: boolean;
    }
    interface IIssue {
        id: number;
        title: string;
        status: issueStatus;
        userId: number;
        timeStamp: number;
    }
    interface IFilter {
        title: string;
        type: 'filter' | 'assignee' | 'label' | 'milestone' | 'author';
        emptyFilterOption?: string;
    }
}
