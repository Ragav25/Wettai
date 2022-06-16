/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components';
import SortAndStatusContainer from './UserHomeLeftSection/SortAndStatusContainer';
import JobsContainer from './UserHomeLeftSection/JobsContainer';
import SearchSection from './UserHomeRightSection/SearchSection';

const ContainerOuter = styled.div`
    width: 100%;
    height: var(--height-home-main);
    background: var(--theme-secondary);
`;

const FirstContainer = styled.div`
    width: 95%;
    height: 100%;
    background: var(--theme-secondary);
    margin: 0 auto;
    display: flex;
    /* background: blue; */
`;

const SplitSection = styled.div`
    height: 100%;
    padding: 20px 10px;

    &::-webkit-scrollbar {
        width: 5px;
        /* height: 0.5em; */
        background: var(--theme-grey); 
    }

    &::-webkit-scrollbar-thumb {
        background: var(--color-greyOnWhite); 
        border-radius: 3px;

    &:hover {
        background: var(--theme-primary);
        cursor: pointer
    }

    }

    &.leftSection{
        /* background: red; */
        width: var(--wd-leftSection);
        overflow: auto;
        position: relative;
        padding-top: 0;
        background: var(--theme-secondary);
        /* box-shadow: 5px 0 15px #0000001f; */
        /* z-index: 1; */

    }

    &.rightSection{
        /* background: yellow; */
        width: var(--wd-rightSection);
        padding-top: 0;
        overflow: auto;
    }
`;

const DescriptionContainer = styled.div`
    width: 100%;
    height: 100%;
    background: grey;
    margin-top: var(--mg-top-home-leftcontainer);
    border-radius: 4px;
`;

export default () => {
    return(
        <ContainerOuter>
            <FirstContainer>
                <SplitSection className='leftSection'>
                    <SortAndStatusContainer />
                    <JobsContainer />
                </SplitSection>
                <SplitSection className='rightSection'>
                    <SearchSection />
                    <DescriptionContainer />
                </SplitSection>
            </FirstContainer>
        </ContainerOuter>
    );
}