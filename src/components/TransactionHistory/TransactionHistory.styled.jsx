import styled from '@emotion/styled';
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  border: 2px solid;
  padding-top: 40px;

  margin-left: auto;
  margin-right: auto;
  thead {
    display: flex;
    justify-content: center;

    tr {
      display: flex;
      justify-content: center;
      width: 350px;
      th {
        flex: 1;
      }
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // width: 350px;
  }
  tr {
    // display: flex;

    // justify-content: center;
  }
  td {
    flex: 1;
  }
`;
