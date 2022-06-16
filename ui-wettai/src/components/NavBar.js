/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styled from 'styled-components';


const Navbar = styled.div`
        width:100%;
        height: var(--height-navbar);
        background: var(--theme-primary);
        /* z-index: 999;
        box-shadow: 0 0 18px 0 #0000001f; */
        /* position: relative; */
`;

export default () => {
    return(
        <Navbar>
        </Navbar>
    );
}