import styled from '@emotion/styled';
import { getRandomColor } from '../../getRandomColor';

export const Stat = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  margin-left: auto;
  margin-right: auto;

  border: 2px solid;
  border-radius: 20px;
  box-shadow: 10px -8px 0px rgb(253 230 138);
`;
export const StatList = styled.ul`
  display: flex;

  width: 350px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  border-radius: 20px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-color: ${getRandomColor};
`;
