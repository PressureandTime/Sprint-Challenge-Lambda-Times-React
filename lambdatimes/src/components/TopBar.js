import React from 'react';
import styled from 'styled-components';

const TopBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  
   .container-left {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
}
 .container-left span {
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
}
 .container-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
}
 .container-center span {
  cursor: pointer;
  margin-right: 5%;
}
 .container-center span:last-child {
  margin-right: 0;
}
 .container-center span:hover {
  text-decoration: underline;
}
 .container-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
}
 .container-right span {
  cursor: pointer;
}

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyled>
      <Container>
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </Container>
    </TopBarStyled>
  )
}

export default TopBar;