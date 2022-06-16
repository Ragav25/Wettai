/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsListUl, BsCardList, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import { BiSort } from "react-icons/bi"

const SortPaginationContainer = styled.div`
    /* background: blue; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: var(--mg-top-home-leftcontainer);
    border-style: solid;
    border-width: 2px 0;
    border-color: var(--theme-grey);
    padding:14px 0;
`;

const InnerDivContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    &.sortList{
        width: var(--wd-sortlist);
        /* background: yellow; */
    }

    &.pagination{
        width: var(--wd-pagination);
        /* background: violet; */
        justify-content: space-between;
        padding: 0 12px 0 0;

    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 0.9rem;
    border-style: solid;
    border-width: 0 2px 0 0;
    border-color: var(--theme-grey);
    text-transform: Capitalize;
    padding: 15px 0px;
`;

const TextContainer = styled.span`
    margin-left: 5px;
    font-size: 0.9rem;

    &.showingResults{
        margin-left: 19px;
    }
`;

const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PaginationSingle = styled.a`
    background: #384A52;
    color: var(--theme-secondary);
    margin-left: 11px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    font-size: 0.8rem;
    font-weight: 500;

    &.arrowIcon{
        font-size: 1.4rem;
    }
`;


export default () => {
    return(
        <SortPaginationContainer>
            <InnerDivContainer>
                <InnerDivContainer className='sortList'>
                    <IconContainer>
                        <BiSort />
                        <TextContainer>sort</TextContainer>
                    </IconContainer>

                    <IconContainer>
                        <BsFillGridFill />
                        <TextContainer>Grid</TextContainer>
                    </IconContainer>

                    {/* <IconContainer>
                        <BsListUl style={{fontSize: "1.2rem"}}/>
                        <TextContainer>List</TextContainer>
                    </IconContainer> */}
                    
                </InnerDivContainer>
                <InnerDivContainer className='pagination'>
                    <TextContainer className='showingResults'>Showing 11 - 20 of 20 results</TextContainer>
                    <PaginationContainer>
                        <PaginationSingle className='arrowIcon'>
                            <BsArrowLeftShort />
                        </PaginationSingle>
                        <PaginationSingle>
                            1
                        </PaginationSingle>
                        <PaginationSingle>
                            2
                        </PaginationSingle>
                        <PaginationSingle>
                            3
                        </PaginationSingle>
                        <PaginationSingle className='arrowIcon'>
                            <BsArrowRightShort />
                        </PaginationSingle>
                    </PaginationContainer>
                </InnerDivContainer>
            </InnerDivContainer>
            
        </SortPaginationContainer>
    );
}