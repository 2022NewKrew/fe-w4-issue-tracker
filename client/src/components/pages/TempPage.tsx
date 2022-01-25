import React from 'react';
import { Button, FilterBar } from '@components/assets';

export const TempPage = () => {
    return (
        <div>
            <FilterBar />
            <Button innerText="BUTTON" buttonType="large" />
            <Button innerText="BUTTON" buttonType="medium-standard" />
            <Button innerText="BUTTON" buttonType="small-standard" />
            <Button innerText="BUTTON" buttonType="small-secondary" />
            <Button innerText="BUTTON" disabled="disabled" />
        </div>
    );
};
