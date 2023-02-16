import styled from "styled-components";

export const Main = styled.div`
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 90%;
    margin: 30px auto;
    border: 1px solid #ddd;
    padding: 24px;
    & .add-icon {
        float: right;
    }
    & .icon-action{
        cursor: pointer;
        margin-left: 10px;
    }
    & .input-edit{
        margin-right: 10px;
        flex: 1 1 auto;

    }
    & .text-center {
        text-align: center;
        margin: 0 0 35px
    }
`