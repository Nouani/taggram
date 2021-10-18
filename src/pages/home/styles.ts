import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 20px;

    & > div {
        width: 100%;
        max-width: 930px;

        display: flex;
        flex-direction: column;
        align-items: center;

        footer {
            margin-top: 50px;
        }
    }
`;

export default Container;
