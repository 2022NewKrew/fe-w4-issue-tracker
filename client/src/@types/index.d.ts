declare module '@types' {
    type issueStatus = 'open' | 'close';
    type issueFilterType =
        | 'filter'
        | 'assignee'
        | 'label'
        | 'milestone'
        | 'author'
        | 'statusChange';
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
        labelings?: ILabeling[];
        milestoneId?: number;
    }
    interface IFilter {
        title: string;
        type: issueFilterType;
        emptyFilterOption?: string;
    }
    interface IFilterInfo {
        id: number;
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
    interface IAssign {
        id: number;
        userId: number;
        issueId: number;
    }
    interface IFieldFilterState {
        assignee: number;
        label: number[];
        milestone: number;
        author: number;
    }
}
