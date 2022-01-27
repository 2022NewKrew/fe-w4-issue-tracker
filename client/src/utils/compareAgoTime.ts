const SECOND = 1000; // ms
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;

const convertTime = (milliSeconds: number, divider: number) => {
    return Math.floor(milliSeconds / divider);
};

const isYesterDay = (beforeTime: number, afterTime: number) => {
    const beforeDate = new Date(beforeTime);
    const afterDate = new Date(afterTime);
    const yesterdayOfAfterDate = new Date(afterDate.setDate(afterDate.getDate() - 1));
    if (beforeDate.getDate() === yesterdayOfAfterDate.getDate()) return true;
    return false;
};

const getDateString = (time: number) => {
    const date = new Date(time);
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${fullYear}년 ${month}월 ${day}일`;
};

export const compareAgoTime = (beforeTime: number, afterTime: number) => {
    const diffMilliSeconds = afterTime - beforeTime;
    console.log(beforeTime, afterTime, diffMilliSeconds);
    if (diffMilliSeconds < SECOND) return '지금';
    if (diffMilliSeconds < MINUTE) return `${convertTime(diffMilliSeconds, SECOND)}초 전`;
    if (diffMilliSeconds < HOUR) return `${convertTime(diffMilliSeconds, MINUTE)}분 전`;
    if (diffMilliSeconds < DAY) return `${convertTime(diffMilliSeconds, HOUR)}시간 전`;
    if (isYesterDay(beforeTime, afterTime)) return '어제';
    if (diffMilliSeconds < MONTH) return `${convertTime(diffMilliSeconds, DAY)}일 전`;
    return getDateString(beforeTime);
};
