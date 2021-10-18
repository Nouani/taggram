import styled from "styled-components";

export const MorePostsContainer = styled.div`
    border-top: 1px solid #efefef;
    width: 100%;

    margin-top: 50px;
    padding: 15px 0;

    h1 {
        font-size: 14px;
        color: #8e8e8e;
    }

    & > div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        grid-gap: 40px;
        margin-top: 20px;

        img {
            width: 100%;
            height: auto;
            background-color: #eee;

            @media (min-width: 960px) {
                max-height: 280px;
                max-width: 280px;
            }
        }
    }
`;

export const ImageLoading = styled.div`
    width: 280px;
    height: 280px;
    background-color: #eee;
`;
