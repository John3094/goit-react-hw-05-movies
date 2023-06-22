import styled from 'styled-components';

export const CastStyled = styled.div`
  display: flex;
  width: 100%;
`;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  height: 100%;
  box-shadow: 0px 5px 5px grey;
`;
