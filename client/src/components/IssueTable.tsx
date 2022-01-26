import React from 'react';
import styled from 'styled-components';
import { Table } from './assets';

const renderTableHeader = () => {
    return <div>테이블 헤더 내용</div>;
};

export const IssueTable = () => {
    return (
        <Table tableHeader={renderTableHeader()}>
            <div>테이블 내용</div>
            <div>테이블 내용</div>
            <div>테이블 내용</div>
        </Table>
    );
};
