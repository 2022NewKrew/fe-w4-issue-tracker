declare module '@types' {
    interface ITabElement {
        icon: string;
        title: string;
        count: number;
        isLast?: boolean;
    }
    interface IIssue {
        id: number;
        title: string;
        status: 'open' | 'close';
        userId: number;
        timeStamp: number;
    }
    interface IFilter {
        title: string;
        type: 'filter' | 'assignee' | 'label' | 'milestone' | 'writer';
        emptyFilterOption?: string;
    }
}
