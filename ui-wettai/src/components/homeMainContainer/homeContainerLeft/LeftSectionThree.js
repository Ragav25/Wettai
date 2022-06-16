/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import SingleJobContainer from './SingleJobContainer';

const LeftSectionThree = styled.div`
    width: 100%;
    margin-top: var(--mg-top-home-leftcontainer);

    /* background: red; */
`;

const Loading = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`;


export default () => {

    const[loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            try{
                const{data: response} = await axios.get('http://localhost:8080/user/jobs/getalljobs');
                setJobs(response);
            } catch (error){
                console.log(error.message);
                setJobs(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    console.log(jobs);

    return(
            <>
            {loading && <Loading> Loading...! </Loading>}
            {!loading && (
            <LeftSectionThree>
                {jobs.map(data => (<SingleJobContainer key={data.id} title={data.jobTitle} company={data.company} status={data.status} />))}
                {/* <SingleJobContainer status={"interviewing"}/>
                <SingleJobContainer status={"applied"}/>
                <SingleJobContainer status={"not-selected"}/>
                <SingleJobContainer status={"selected"}/>
                <SingleJobContainer status={"hitlist"}/>
                <SingleJobContainer status={"applied"}/> */}
            </LeftSectionThree>
            )}
            </>
        
    );
}