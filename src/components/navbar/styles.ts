import styled, { keyframes } from "styled-components";

const loading = keyframes`
    to {
        background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
`;

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
        background-color: #eee;
    }
`;

export const UserProfileLoading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div {
        cursor: progress;
        background: linear-gradient(0.25turn, transparent, #fff, transparent),
            linear-gradient(#eee, #eee),
            radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
            linear-gradient(#eee, #eee);
        background-repeat: no-repeat;
        background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
        background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
        animation: ${loading} 1.5s infinite;
    }

    .name {
        height: 15px;
        width: 120px;
        border-radius: 4px;
        margin-right: 15px;
    }

    .img {
        height: 22px;
        width: 22px;
        border-radius: 50%;
    }
`;
