import styled from '@emotion/styled';
export const Friends = styled.ul`
  width: 350px;
  border: 2px solid;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  li {
    .online {
      background-color: green;
    }
    .offline {
      background-color: red;
    }
  }
`;
