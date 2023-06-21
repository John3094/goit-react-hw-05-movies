import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #aef9d9;
`;

export const Header = styled.header`
  background-color: #7affcc;
  box-shadow: 0px 5px 5px grey;
`;

export const Main = styled.main`
  background-color: #cce5db;
  box-shadow: 0px 5px 5px grey;
  padding-left: 20px;
`;

export const List = styled.ul`
  margin: auto;
  display: flex;
  padding: 20px;
  list-style: none;
  justify-content: center;
  gap: 30px;
`;

export const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  &.active {
    color: red;
    text-shadow: 3px 5px 3px grey;
  }
`;
