import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid red;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 0;

    & > div {
        //border: 1px solid red;
        width: 100%;
        max-width: 930px;

        display: flex;
        flex-direction: column;
    }
`;

export default Container;
