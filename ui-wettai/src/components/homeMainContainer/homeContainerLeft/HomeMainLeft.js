import React from 'react'
import styled from 'styled-components'
import LeftSectionOne from './LeftSectionOne';
import LeftSectionThree from './LeftSectionThree';
import LeftSectionTwo from './LeftSectionTwo';

const LeftBody = styled.div`
    background: var(--theme-secondary);
    width: var(--width-left-main);
    height: 100%;
    box-shadow: 0 0 15px #0000001f;
    z-index: 1;
    padding: var(--padding-horizontal-home) var(--padding-vertical-home);
    overflow-y: auto;
`;

const HomeMainLeft = () => {
    return(
        <LeftBody>
            <LeftSectionOne />
            <LeftSectionTwo />
            {/* <LeftSectionThree /> */}
        </LeftBody>
    );
}

export default HomeMainLeft;