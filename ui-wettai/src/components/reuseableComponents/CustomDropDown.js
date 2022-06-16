/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import styled from 'styled-components'

const DropDownContainer = styled("div")`
    width: 100%;
    position: relative;
`;

const DropDownHeader = styled("div")`
    padding: var(--pd-top-bottom-home) var(--pd-left-right-home);
    color: black;
	background: var(--theme-grey);
    font-weight: 500;
    font-size: 0.7rem;
    border-right:1px solid var(--color-lightgrey);
    text-transform: capitalize;
`;

const DropDownListContainer = styled("div")`
    position: absolute;
    width: 100%;
    margin-top: 0.3em;
`;

const DropDownList = styled("ul")`
    padding-left: 1em;
    box-sizing: border-box;
    padding: var(--pd-top-bottom-home) var(--pd-left-right-home);
    color: var(--theme-primary);
	background: var(--theme-grey);
    font-weight: 500;
    font-size: 0.7rem;

    &:first-child {
        padding-top: 0.8em;
  }

  &:last-child{
    padding-bottom: 0.5em;
  }
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
    text-transform: capitalize;
    cursor: pointer;

    &.hover{
        background: red;
    }
`;

// const options = ["Selected", "Interviewing", "Not-Selected"]

export default ({initialValue, options}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(initialValue);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return(
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                <DropDownList>
                    {options.map(option => (
                        <ListItem onClick={onOptionClicked(option.value)} key={option.key}>
                            {option.value}
                        </ListItem>
                    ))}
                </DropDownList>
                </DropDownListContainer>
            )}
            
        </DropDownContainer>
    );
}