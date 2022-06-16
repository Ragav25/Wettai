/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components'
import SingleJobContainer from '../../homeMainContainer/homeContainerLeft/SingleJobContainer';
import SingleJobSection from './SingleJobSection';

const JobContainer = styled.div`
    width: 100%;
    margin-top: var(--mg-top-home-leftcontainer);
`;

export default () => {
    return(
        <JobContainer>
            <SingleJobSection />
            <SingleJobSection status={"HITLIST"}/>
            <SingleJobSection status={"SELECTED"}/>
            <SingleJobSection status={"NOT-SELECTED"}/>
            <SingleJobSection status={"INTERVIEWING"}/>
        </JobContainer>
    );
}

