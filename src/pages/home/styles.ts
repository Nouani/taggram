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

export const Post = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 600px;

    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;

    & > img {
        //width: 10px;
        max-width: 600px;
        height: 100%;
        border-radius: 3px 0 0 3px;
    }

    & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const PostHeader = styled.div`
    //border: 1px solid red;

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
    //border: 1px solid red;

    width: 100%;
    height: calc(100% - 140px);

    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
`;

export const Comment = styled.div`
    //border: 1px solid red;

    width: 100%;
    padding: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CommentContent = styled.div`
    //border: 1px solid red;

    width: 100%;
    max-width: 220px;

    display: flex;
    flex-direction: column;

    & > p {
        font-size: 14px;
        line-height: 18px;

        strong {
            margin-right: 5px;
        }
    }

    & > div {
        margin-top: 15px;

        display: flex;
        flex-direction: row;
        align-items: center;

        p {
            font-size: 14px;
            color: #8e8e8e;
        }

        strong {
            margin-left: 12px;
            font-size: 14px;
            color: #8e8e8e;
        }
    }
`;

export const PostFooter = styled.div`
    //border: 1px solid red;

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

export const UserImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;
