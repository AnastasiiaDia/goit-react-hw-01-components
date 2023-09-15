import styled from '@emotion/styled';
export const Round = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;

export const FriendImg = styled.img`
  width: 50px;
`;
