/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components';
import HomeMainLeft from './homeContainerLeft/HomeMainLeft';
import HomeMainRight from './homeContainerRight/HomeMainRight';

const HomeMain = styled.div`
    height: var(--height-home-main);
    background: var(--theme-secondary);
    width: 100vw;
    position: relative;

    display: flex;
`;
export default () => {
    return(
        <HomeMain>
            <HomeMainLeft></HomeMainLeft>
            <HomeMainRight></HomeMainRight>
        </HomeMain>
    );    
}