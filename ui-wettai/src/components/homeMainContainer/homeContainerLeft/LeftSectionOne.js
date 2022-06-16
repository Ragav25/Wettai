/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styled from 'styled-components';
import { RiListSettingsLine } from "react-icons/ri";
import {MdKeyboardArrowDown} from "react-icons/md";

const FilterStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const FilterIcon = styled.span`
    background: #2A6781;
    padding: ${props => props.pd};
    border-radius: 4px 0px 0px 4px;
`; 

const FSButton = styled.button`
    background: var(--theme-primary);
    width: ${props => props.width};
    padding: ${props => props.pd};
    border: 0;
    outline: 0;
    border-radius: 4px;
    color: var(--color-primary);
    font-size: 0.9rem;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
    z-index: 100;
    box-shadow: 0 4px 12px #0000001a;

    &:hover {
        background: #435157;
    }

    &:hover ${FilterIcon} {
        background: #384A52;
    }
`;



const FilterText = styled.span`
    padding-left: 10px;
    padding: ${props => props.pd};
`;



export default () => {
    return(
        <FilterStatus>
            <FSButton>
                <FilterIcon pd={"10px 15px"}>
                    <RiListSettingsLine />
                </FilterIcon>
                <FilterText pd={"10px 15px"}>
                    Filter
                </FilterText>
            </FSButton>
            <FSButton pd={"10px 15px"}>All Jobs <MdKeyboardArrowDown style={{margin: "2px 0px 0 4px"}}/></FSButton>
        </FilterStatus>
    );
}