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
        labelings: ILabeling[];
        milestoneId: number | null;
    }
    interface IFilter {
        title: string;
        type: 'filter' | 'assignee' | 'label' | 'milestone' | 'author';
        emptyFilterOption?: string;
    }
    interface ILabel {
        id: number;
        title: string;
        description: string;
        color: string;
    }
    interface ILabeling {
        id: number;
        issueId: number;
        labelId: number;
    }
    interface IMilestone {
        id: number;
        title: string;
        dueDate: number;
        description?: string;
    }
}
