import React from 'react';
import styled from 'styled-components';
import HomeMainContainer from './components/homeMainContainer/HomeMainContainer';
import NavBar from './components/NavBar';
import JobCollectionsMain from './components/UserHome/JobCollectionsMain';

const MainBody = styled.div`
background: var(--theme-secondary);
box-sizing: border-box;
height:100%;
`;

const InnerMainBody = styled.div`
background: var(--theme-tertiary);
box-sizing: border-box;
height:100%;
`;

const App = () => { 
  return (
   <MainBody>
     <InnerMainBody>
      <NavBar />
      {/* <HomeMainContainer /> */}
      <JobCollectionsMain />
     </InnerMainBody>
   </MainBody>
  );
}

export default App;
