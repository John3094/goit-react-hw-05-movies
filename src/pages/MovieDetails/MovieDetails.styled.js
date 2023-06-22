import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Movie = styled.div`
  display: flex;
  width: 650px;
  height: 600px;
  padding: 10px;
  border-bottom: 1px solid grey;
`;

export const Img = styled.img`
  width: 100%;
  margin-right: 15px;
`;

export const MovieInfo = styled.div`
  padding: 10px;
  border-bottom: 1px solid grey;
`;

export const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  &.active {
    color: red;
    text-shadow: 3px 5px 3px grey;
  }
`;
