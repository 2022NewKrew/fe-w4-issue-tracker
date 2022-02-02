import { atom, selector } from 'recoil';
import { fetchLabels } from '@apis';
import { ILabel } from '@types';

export const labelInfoSelector = selector<ILabel[]>({
    key: 'labelInfoSelector',
    get: async () => {
        const res = await fetchLabels();
        if (!res.ok) return [];
        const resJson = await res.json();
        const data = resJson.data;
        return data;
    },
});

export const labelInfoAtom = atom<ILabel[]>({
    key: 'labelInfo',
    default: labelInfoSelector,
});

// const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);
