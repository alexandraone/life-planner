import React, { ReactNode } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const AppLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default AppLayout;
