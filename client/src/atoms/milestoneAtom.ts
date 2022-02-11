import { atom, selector } from 'recoil';
import { fetchMilestones } from '@apis';
import { IMilestone } from '@types';

export const milestoneInfoSelector = selector<IMilestone[]>({
    key: 'milestoneInfoSelector',
    get: async () => {
        const res = await fetchMilestones();
        if (!res.ok) throw Error(`fetch fail! status code: ${res.status}`);
        const { data } = await res.json();
        return data;
    },
});

export const milestoneInfoAtom = atom<IMilestone[]>({
    key: 'milestoneInfo',
    default: milestoneInfoSelector,
});
