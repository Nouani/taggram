import styled from "styled-components";

export const Container = styled.div`
    //border: 1px solid red;
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

export const MorePosts = styled.div`
    //border: 1px solid red;
    border-top: 1px solid #efefef;
    width: 100%;

    margin-top: 50px;
    padding: 15px 0;

    h1 {
        font-size: 14px;
        color: #8e8e8e;
    }

    & > div {
        //border: 1px solid red;

        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px;
        margin-top: 20px;

        img {
            width: 280px;
            height: 280px;
        }
    }
`;
