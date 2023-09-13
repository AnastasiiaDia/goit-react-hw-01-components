import styled from '@emotion/styled';
// import { getRandomColor } from '../getRandomColor';
// import { Statistics } from './Statistics';
export const Stat = styled.section`
  width: 350px;
  border: 2px solid;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
export const StatList = styled.ul`
  display: flex;
  width: 350px;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  border: 1px solid black;
`;
