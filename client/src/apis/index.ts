import { useFetch } from '../hooks';

export const getIssues = () => {
    return useFetch(`${process.env.SERVER_BASE_URL}/issues`);
};

// recoil에서 쓰일때는 state(loading, error 등)를 제공해주므로 useFetch를 사용하지 않고 fetch해온다

export const fetchIssues = () => {
    return fetch(`${process.env.SERVER_BASE_URL}/issues`);
};

export const fetchLabels = () => {
    return fetch(`${process.env.SERVER_BASE_URL}/labels`);
};

export const fetchMilestones = () => {
    return fetch(`${process.env.SERVER_BASE_URL}/milestones`);
};
