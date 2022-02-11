declare module '@types' {
    enum issueFilterEnum {
        filter = 'filter',
        assignee = 'assignee',
        label = 'label',
        milestone = 'milestone',
        author = 'author',
        statusChange = 'statusChange',
    }

    type issueFilterType = keyof typeof issueFilterEnum;

    type issueStatus = 'open' | 'close';

    interface ITabElement {
        icon: string;
        title: string;
        count: number;
        href: string;
        isLast?: boolean;
    }
    interface IIssue {
        id: number;
        title: string;
        status: issueStatus;
        userId: number;
        timeStamp: number;
        labelings?: ILabeling[];
        milestoneId?: number;
        assignments?: IAssignments[];
    }
    interface IFilter {
        title: string;
        type: issueFilterType;
        emptyFilterOption?: string;
    }
    interface IFilterInfo {
        id: number | null;
        name: string;
    }
    interface IUser extends IFilterInfo {
        profileImgSrc: string;
    }
    interface ILabel extends IFilterInfo {
        description: string;
        color: string;
    }
    interface IMilestone extends IFilterInfo {
        dueDate: number;
        description?: string;
    }
    interface ILabeling {
        id: number;
        issueId: number;
        labelId: number;
    }
    interface IAssignments {
        id: number;
        userId: number;
        issueId: number;
    }
    interface IFieldFilterState {
        assignee: number | null;
        label: number[] | null;
        milestone: number | null;
        author: number | null;
    }
}
