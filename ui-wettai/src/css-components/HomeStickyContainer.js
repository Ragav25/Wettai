import React from 'react'
import styled from 'styled-components'

export const StickyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.stickyMain {
        background: var(--theme-secondary);
        position: sticky;
        top: 0;
        z-index: 99;
        padding: 20px 0 0 0;
    }

    &.stickyInner {
        background: var(--color-lightgrey);
        /* background: red; */
        padding: var(--pd-left-right-home);
        border-radius: 5px;
        width: 100%;
        justify-content: flex-start;
    }
`;

export const InputField = styled.input`
     /* padding: calc(var(--pd-top-bottom-home) - 0.5px) var(--pd-left-right-home); */
    padding: var(--pd-top-bottom-home) var(--pd-left-right-home);
	color: var(--theme-primary);
	background: var(--theme-grey);
	border: none;
	/* border-radius: 3px; */
    outline: none;
    border-right:1px solid var(--color-lightgrey);
    font-size: 0.7rem;
    font-weight: 600;
    width: 100%;

    &:hover{
        /* border: none; */
        outline: none;
    }

    &::placeholder{
        color: black;
        font-weight: 500;
    }

    &.lastInput{
        border: none;
        /* padding: var(--pd-top-bottom-home) var(--pd-left-right-home); */
        width: 80%;
    }
`;



export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: var(--theme-primary);
    color: var(--color-primary);
    font-size: 0.7rem;
    font-weight: 600;
`;

