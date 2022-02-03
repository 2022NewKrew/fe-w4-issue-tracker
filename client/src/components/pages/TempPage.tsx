import React from 'react';
import { Button, SmallLabel, LargeLabel } from '@components/assets';
import { Tabs, FilterBar } from '@components';

export const TempPage = () => {
    return (
        <div>
            <SmallLabel
                type="dark-text"
                labelInfo={{ title: '레이블 이름', color: 'var(--background-color)' }}
            />
            <SmallLabel type="dark-text" labelInfo={{ title: '레이블 이름', color: 'red' }} />
            <SmallLabel
                type="light-text"
                labelInfo={{ title: '레이블 이름', color: 'var(--body-color)' }}
            />
            <SmallLabel type="light-text" labelInfo={{ title: '레이블 이름', color: 'red' }} />
            <SmallLabel type="line" labelInfo={{ title: '작성자', color: 'var(--line-color)' }} />
            <SmallLabel type="line" labelInfo={{ title: '작성자', color: 'red' }} />
            <LargeLabel type="open" />
            <LargeLabel type="close" />
            <Tabs />
            <FilterBar />
            <Button innerText="BUTTON" buttonType="large" />
            <Button innerText="BUTTON" buttonType="medium-standard" />
            <Button innerText="BUTTON" buttonType="small-standard" />
            <Button innerText="BUTTON" buttonType="small-secondary" />
            <Button innerText="BUTTON" disabled="disabled" />
        </div>
    );
};
