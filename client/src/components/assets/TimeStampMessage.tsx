import React from 'react';
import { messageType } from '@types';
import { compareAgoTime } from '@utils';

interface IProps {
    timeStamp: number;
    current: number;
    type?: messageType | null;
    author?: string | null;
}

const getMessage = (timeAgo: string, type: messageType, author: string) => {
    const typeMessages = {
        open: '열렸습니다',
        close: '닫혔습니다',
    };
    return `이 이슈가 ${timeAgo} ${author}에 의해 ${typeMessages[type]}`;
};

export const TimeStampMessage = ({ timeStamp, current, type = null, author = null }: IProps) => {
    const timeAgoString = compareAgoTime(timeStamp, current);
    if (!type || !author) return timeAgoString;
    return getMessage(timeAgoString, type, author);
};
