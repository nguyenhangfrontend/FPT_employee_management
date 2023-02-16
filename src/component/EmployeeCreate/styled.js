import styled from "styled-components";

export const Main = styled.form`
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 33%;
  margin: 30px auto;
  border: 1px solid #ddd;
  padding: 24px;
  & .button-create {
    margin-top: 15px;
    display: flex;
  }
  & .field {
    display: flex;
    margin-top: 10px;
  }
  & .field-gender {
    display: inline-flex;
  }
`;
