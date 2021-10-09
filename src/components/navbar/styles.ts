import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 55px;

    position: fixed;

    display: flex;
    justify-content: center;

    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;

    & > div {
        width: 100%;
        max-width: 930px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const UserProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > p {
        font-size: 14px;
        font-weight: normal;
        margin-right: 15px;
    }

    & > img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
    }
`;
