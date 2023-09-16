import styled from '@emotion/styled';
export const Table = styled.table`
  display: flex;
  flex-direction: column;

  width: 600px;
  padding: 25px;
  margin-left: auto;
  margin-right: auto;

  border: 2px solid;
  border-radius: 20px;
  box-shadow: 10px -8px 0px rgb(253 230 138);
  thead {
    display: flex;
    justify-content: center;

    tr {
      display: flex;
      flex: 1;
      width: 350px;
      padding-bottom: 10px;
      th {
        flex: 1;
      }
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  tr {
    display: flex;
    justify-content: center;
  }
  td {
    flex: 1;
    text-align: center;
    width: 182px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }
`;
