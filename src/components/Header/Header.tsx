import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: black;
  width: 100%;
  height: 30px;
`;

const Header: FC = () => (
  <StyledHeader>
    <h1>Header</h1>
  </StyledHeader>
);

export default Header;
