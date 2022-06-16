/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components'
import SkillsContainer from '../../reuseableComponents/SkillsContainer';

// const handleStatus = status => {
//     switch(status){
//         case "INTERVIEWING":
//             return `color: var(--color-interviewing); background: var(--bg-interviewing);`;
//         case "SELECTED":
//             return "color: var(--color-selected); background: var(--bg-interviewing);";
//         case "HITLIST":
//             return `color: var(--color-hitlist); background: var(--bg-hitlist);`;
//         case "NOT-SELECTED":
//             return `color: var(--color-notselected); background: var(--bg-notselected);`;
//         default :
//             return `color: var(--color-applied); background: var(--bg-applied);`;
//     }
// }

const handleStatus = status => {
    switch(status){
        case "INTERVIEWING":
            return "interviewing";
        case "SELECTED":
            return "selected";
        case "HITLIST":
            return "hitlist";
        case "NOT-SELECTED":
            return "notselected";
        default :
            return "applied";
    }
}

const SingleJobSection = styled.div`
    width: 100%;
    /* background: var(--theme-secondary); */
    height: 137px;
    display: flex;
    margin-bottom: 10px;
    
    &:hover{
        box-shadow: 0 0 15px #0000001f;
        z-index: 9;
        cursor: pointer;
    }

    &:hover .status-container{
        background: var(--color-${({status}) => handleStatus(status)});
        color: var(--theme-tertiary);
    }
`;

const InnerJobSection = styled.div`

    height: 100%;
    background: var(--theme-tertiary);
    padding: var(--pd-left-right-home);

    &.leftJobSection{
        width: var(--wd-singleJobSplit-left);
        border-left: 5px solid var(--color-${({status}) => handleStatus(status)});
        border-radius: var(--bdr-singlejob-container) 0 0 var(--bdr-singlejob-container);

        /* background: pink; */
    }

    &.rightJobSection{
        width: var(--wd-singleJobSplit-right);
        border-left: 3px solid var(--theme-secondary);
        border-radius: 0 var(--bdr-singlejob-container) var(--bdr-singlejob-container) 0;

        position: relative;

        /* background: violet; */
    }
`;

const JobLogoContainer = styled.div`
    width: 65px;
    height: 55px;
    border-radius: 6px;
    background: var(--theme-primary);
`;

const FlexRowContainer = styled.div`
    display: flex;
    /* background: blue; */

    &.logoTitleCompany{
        /* background: gray; */
    }

    &.company-date{
        justify-content: space-between;
        padding: 5px 0;
    }

    &.skills{
        margin-top: 16px;
    }

`;

const FlexColumnContainer = styled.div`
    display:flex;
    flex-direction: column;
    /* background: blue; */
    width: 100%;

    &.company-title-container {
        padding-left: 9px;
    }
    &.jobBoard{
        padding-top: 5px;
    }

    &.board-status{
        height: 100%;
    }

`;

const Span = styled.span`
    display: flex;
    align-items:center;
    justify-content: center;


    &.title{
        font-size: 1rem;
        font-weight: 700;
    }

    &.date{
        font-size: var(--font-date-board);
        font-weight: 500;
        color: var(--color-greyOnWhite)
    }

    &.company{
        justify-content: flex-start;
        font-size: 0.9rem;
    }

    &.jobBoardText-heading,
    &.jobBoarText-content{
        justify-content: flex-start;
    }

    &.jobBoardText-heading{
        font-size: var(--font-date-board);
        color: var(--color-greyOnWhite);
        font-size: 0.7rem;
        font-weight: 500;
    }

    &.jobBoarText-content{
        font-size: 0.9rem;
        margin-top: 6px;
        font-weight: 600;
    }

`;

const StatusContainer = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-top: 20px;
    padding: 13px 10px;
    border-radius: 4px;
    background: blue;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-${({status}) => handleStatus(status)});
    background: var(--bg-${({status}) => handleStatus(status)});
`;

const TriangleTR = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        background: grey;
        border-width: 0 30px 30px 0;
        border-color: transparent red transparent transparent;
`;


export default ({status}) => {
    return(
        <SingleJobSection status={status}>

            {/* left section */}
            <InnerJobSection className='leftJobSection' status={status}>
                <FlexRowContainer className='logoTitleCompany'>
                    <JobLogoContainer></JobLogoContainer>
                    <FlexColumnContainer className='company-title-container'>
                        <FlexRowContainer className='company-date'>
                            <Span className='title'>Software Developer</Span>
                            <Span className='date'>May 02, 2022</Span>
                        </FlexRowContainer>
                        <Span className='company'>Workday</Span>
                    </FlexColumnContainer>
                </FlexRowContainer>
                <FlexRowContainer className='skills'>
                    <SkillsContainer className={"skill"} skillText={"Java"} />
                    <SkillsContainer className={"skill"} skillText={"Spring Boot"} />
                    <SkillsContainer className={"skill"} skillText={"React JS"} />
                </FlexRowContainer>
            </InnerJobSection>

            {/* right section */}
            <InnerJobSection className='rightJobSection'>
                {/* triangle star */}
                <TriangleTR></TriangleTR>
                <FlexColumnContainer className='board-status'>
                    <FlexColumnContainer className='jobBoard'>
                        <Span className='jobBoardText-heading'>
                            Job Board
                        </Span>
                        <Span className='jobBoarText-content'>
                            LinkedIn
                        </Span>
                    </FlexColumnContainer>
                    <StatusContainer className='status-container' status={status}>
                        {status ? status : "applied"}
                    </StatusContainer>
                </FlexColumnContainer>
            </InnerJobSection>
        </SingleJobSection>
    );
}