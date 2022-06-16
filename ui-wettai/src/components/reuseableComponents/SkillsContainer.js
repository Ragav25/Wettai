/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components'

const SkillContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.ft_size};
    font-size: 0.65rem;
    background: var(--color-lightgrey);
    padding: 6px 18px;
    border-radius: 4px;
    font-weight: 500;
    text-transform: Capitalize;
    color: ${props => props.color? props.color: "#000000"};

    &.skill{
        margin-right: 5px;
    }

    &.statusSection{
        font-weight: 600;
        text-transform: lowercase;
        border-radius: 14px;
    }
`;

export default ({className, skillText, ft_size, color}) => {
    return(
        <SkillContainer className={className} ft_size={ft_size}  color={color}>
            {skillText}
        </SkillContainer>
    );
}