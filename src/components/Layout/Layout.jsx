import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Main, List, NavItem } from './Layout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <List>
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="movies">Movies</NavItem>
          </li>
        </List>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
