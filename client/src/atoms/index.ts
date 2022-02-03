import { atom, selector } from 'recoil';
import { fetchLabels, fetchMilestones } from '@apis';
import { ILabel, IMilestone } from '@types';

export const labelInfoSelector = selector<ILabel[]>({
    key: 'labelInfoSelector',
    get: async () => {
        const { data } = await fetchLabels().then((res: Response) => {
            if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
            return res.json();
        });

        return data;
    },
});

export const labelInfoAtom = atom<ILabel[]>({
    key: 'labelInfo',
    default: labelInfoSelector,
});

export const milestoneInfoSelector = selector<IMilestone[]>({
    key: 'milestoneInfoSelector',
    get: async () => {
        const { data } = await fetchMilestones().then((res: Response) => {
            if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
            return res.json();
        });

        return data;
    },
});

export const milestoneInfoAtom = atom<IMilestone[]>({
    key: 'milestoneInfo',
    default: milestoneInfoSelector,
});
