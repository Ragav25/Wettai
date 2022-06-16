/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import styled from 'styled-components';
import SkillsContainer from '../../reuseableComponents/SkillsContainer';

const handleStatus = status => {
    switch(status){
        case "INTERVIEWING":
            return `var(--color-interviewing)`;
        case "SELECTED":
            return "green";
        case "HITLIST":
            return `var(--color-hitlist)`;
        case "NOT-SELECTED":
            return `var(--color-notselected)`;
        default :
            return `var(--color-applied)`;
    }
}

const SingleJobContainer = styled.div`
    width: 100%;
    &.SJobContainer{
        margin-top: 10px;
        
        background: var(--theme-tertiary);
        border-radius: var(--bdr-singlejob-container);
        display:flex;
        border-left: 5px solid ${({status}) => handleStatus(status)};
    }

    &.SJobContainer:hover{
        box-shadow: 0 0 15px #0000001f;
        z-index: 9;
        cursor: pointer;
    }

    &.SJobContainer:hover .statusSection {
        background: ${({status}) => handleStatus(status)};
        color: var(--theme-tertiary);
    }

    &.SJobInner{
        /* background: green; */
        padding: 20px 18px 20px 18px;
    }
    
`;

const JobDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.title-container{
        
    }

    &.skills-container,  
    &.status-details{
        margin-top: 14px;
    }

    &.skills-container{
        width: var(--wd-skills);
        /* background: gold; */
    }

    &.status-details{
        width: var(--wd-statusDetails);
        font-size: var(--font-skills-left);
        /* padding: 0 0 7px 15px; */
        justify-content: flex-end;
        /* background: yellow; */
    }

    &.lineThree{
        /* background: grey; */
    }
`;

const Span = styled.span`
    margin-top: 8px;
    /* &::first-letter {
        text-transform: lowercase;
    } */

    &.jobTitle{
        font-weight: 700;
        font-size: 1.12rem;
        margin-top: 0;
        letter-spacing: .02rem; 
    }

    &.company{
        font-weight: 500;
        font-size: 0.9rem;
    }

    &.subDetails{
        /* margin: 0 0 9px 20px; */
        font-weight: 600;
        padding: 8px 13px;
    }

    &.status{
        color: ${({status}) => handleStatus(status)};
        background: red;
        padding: 5px;
    }

    
`;

export default ({title, company, appliedDate, status}) => {
    return(
            <SingleJobContainer className='SJobContainer' status={status}>
                <SingleJobContainer className='SJobInner'>
                    <JobDetails className='title-container'>
                        <Span className='jobTitle'>
                            {title}
                        </Span>
                    </JobDetails>

                    <JobDetails className='lineTwo'>
                        <Span className='company'>
                            {company}
                        </Span>
                    </JobDetails>

                    <JobDetails className='lineThree'>
                        <JobDetails className='skills-container'>
                            <SkillsContainer ft_size={`var(--font-skills-left)`} bg_color={`var(--theme-grey)`} skillText={"Java"} />
                            <SkillsContainer ft_size={`var(--font-skills-left)`} bg_color={`var(--theme-grey)`} skillText={"Spring boot"} />
                            <SkillsContainer ft_size={`var(--font-skills-left)`} bg_color={`var(--theme-grey)`} skillText={"react JS"} />
                        </JobDetails>
                        <JobDetails className='status-details'>

                            <SkillsContainer ft_size={`var(--font-skills-left)`} skillText={"Athlone, Ireland"} />
                            <SkillsContainer id="child" ft_size={`var(--font-skills-left)`} skillText={status ? status: "Applied"} color={handleStatus(status)} className={"statusSection"}/>
                            <SkillsContainer ft_size={`var(--font-skills-left)`} skillText={"02/05/2022"} />
                                
                            {/* <Span className='subDetails'>
                                Dublin, Ireland
                            </Span>
                            <Span className='subDetails status' status={status}>
                                {status ? status: "Applied"}
                            </Span>
                            <Span className='subDetails'>
                                02/05/2022
                            </Span> */}
                        </JobDetails>
                    </JobDetails>
                </SingleJobContainer>
            </SingleJobContainer>
    );
}