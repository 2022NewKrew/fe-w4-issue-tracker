import { atom, selector } from 'recoil';
import { fetchMilestones } from '@apis';
import { IMilestone } from '@types';

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
