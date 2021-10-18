import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 100%;
    padding: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CommentContent = styled.div`
    width: 100%;
    padding: 0 15px;

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
