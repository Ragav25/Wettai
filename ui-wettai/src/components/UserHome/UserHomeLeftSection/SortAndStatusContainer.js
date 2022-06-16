/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styled from 'styled-components';
import { BiSort } from "react-icons/bi";
import { Button, StickyContainer } from '../../../css-components/HomeStickyContainer';

const SortAndStatusContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* background: violet; */

    &.main{
        background: var(--theme-secondary);
        position: sticky;
        top: 0;
        z-index: 999;
        padding: 20px 0 0 0;
        /* border-radius: 0 0 5px 5px; */
    }

    &.inner-main{
        background: var(--theme-tertiary);
        /* background: red; */
        padding: var(--pd-left-right-home);
        border-radius: 5px;
        width: 100%;
    }

    &.sort-container{
        width: 50%;
        justify-content: flex-start;
    }

    &.status-container{
        width: 50%;
        justify-content: flex-end;
    }
`;

const SortIcon = styled.span`
    background: var(--theme-primary-opt-two);
    /* padding: var(--pd-top-bottom-home) var(--pd-left-right-home); */
    padding: var(--pd-top-bottom-home);
    border-radius: 4px 0px 0px 4px;
    height: 100%;
    /* font-size: 1rem; */
`; 

const SortText = styled.span`
    /* padding-left: 10px; */
    /* padding: var(--pd-top-bottom-home) var(--pd-left-right-home); */
    padding: var(--pd-top-bottom-home) 14px;
`;

const PaginationResult = styled.span`
    font-size: 0.68rem;
    margin-right: 15px;
`;


const LeftButton = styled(Button)`

    &:hover {
        background: #435157;
        color: var(--theme-grey);
    }

    &:hover ${SortIcon} {
        background: #384A52;
    }

    &.sortButton{

    }

    &.statusButton{
        padding: var(--pd-top-bottom-home) var(--pd-left-right-home);
    }
`;


export default () => {
    return(
        <StickyContainer className='stickyMain'>
        <StickyContainer className='stickyInner'>
            <SortAndStatusContainer className='sort-container'>
                <LeftButton className='sortButton'>
                    <SortIcon>
                        <BiSort />
                    </SortIcon>
                    <SortText>
                        Sort
                    </SortText>
                </LeftButton>
            </SortAndStatusContainer>

            <SortAndStatusContainer className='status-container'>
                <PaginationResult>
                    Showing 10 - 20 of 50 results
                </PaginationResult>
                <LeftButton className='statusButton'>
                    All Jobs
                </LeftButton>
            </SortAndStatusContainer>
        </StickyContainer>
        </StickyContainer>
    );
}