import styled from '@emotion/styled';
// import { getRandomColor } from '../../getRandomColor';

// import { Statistics } from './Statistics';
export const Stat = styled.section`
  width: 350px;
  border: 2px solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 100px; */
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  box-shadow: 10px -8px 0px rgb(253 230 138);
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
  /* border: 1px dashed black; */
  border-radius: 20px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

// /* background-color: ${getRandomColor}; */
