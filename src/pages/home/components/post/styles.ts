import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 600px;

    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;

    & > img {
        width: 100%;
        height: 100%;
        border-radius: 3px 0 0 3px;
        background-color: #eee;

        @media (min-width: 901px) {
            max-width: 600px;
        }
    }

    & > div {
        width: calc(100% - 600px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        height: auto;

        & > img {
            border-radius: 3px 3px 0 0;
            height: auto;
        }

        & > div {
            width: 100%;
        }
    }
`;

export const PostHeader = styled.div`
    width: 100%;
    height: 70px;
    padding: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-bottom: 1px solid #efefef;

    & > div {
        display: flex;
        flex-direction: column;
        margin-left: 15px;

        h1 {
            font-size: 14px;
            line-height: 18px;
        }

        p {
            margin-top: 3px;
            font-size: 12px;
            color: #262626;
        }
    }
`;

export const PostComments = styled.div`
    width: 100%;
    height: calc(100% - 140px);

    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    @media (max-width: 900px) {
        height: 300px;
    }
`;

export const PostFooter = styled.div`
    width: 100%;
    height: 70px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-top: 1px solid #efefef;

    h1 {
        font-size: 14px;
        line-height: 18px;
    }

    p {
        margin-top: 5px;
        font-size: 10px;
        color: #8e8e8e;
    }
`;
