import React from 'react';
import styled from 'styled-components';



function App() {

  const MainBody = styled.div`
    background: #F8F8F8;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
  `;

  const InitialText = styled.h1`
  `;
  return (
   <MainBody>
     <InitialText>WETTAI API - UI INTEGREATION</InitialText>
   </MainBody>
  );
}

export default App;
