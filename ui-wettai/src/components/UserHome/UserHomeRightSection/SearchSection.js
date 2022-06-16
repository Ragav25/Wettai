/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components'
import { InputField, StickyContainer, Button, DropdownSelect } from '../../../css-components/HomeStickyContainer';
import CustomDropDown from '../../reuseableComponents/CustomDropDown';
import StatusJson from "../../../TestJSONs/StatusJSON"

const RightButton = styled(Button)`

    &.addJobButton{
        padding: var(--pd-top-bottom-home) var(--pd-left-right-home);
        border-radius: 4px 0 0 4px;
    }

    &.searchButton{
        padding: var(--pd-top-bottom-home) var(--pd-left-right-home);
        border-radius: 0 4px 4px 0;
        background: var(--color-greyOnWhite);
    }
`;

export default () => {
    return(
        <StickyContainer className='stickyMain'>
            <StickyContainer className='stickyInner'>
                <RightButton className='addJobButton'>Add</RightButton>
                <InputField placeholder='Title'/>
                <InputField placeholder='Company'/>
                <CustomDropDown initialValue={"status"} options={StatusJson.status}/>
                <InputField placeholder='Location' className='lastInput'/>
                
                <RightButton className='searchButton'>Search</RightButton>
            </StickyContainer>
        </StickyContainer>
    );
}