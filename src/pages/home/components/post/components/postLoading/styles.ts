import styled, { keyframes } from "styled-components";

const loading = keyframes`
    to {
        background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
`;

const PostLoadingContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 600px;

    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;

    .photo {
        //width: 10px;
        width: 100%;
        max-width: 600px;
        border-radius: 3px 0 0 3px;
        background-color: #eee;
    }

    .sideContent {
        //border: 1px solid red;
        width: calc(100% - 600px);

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .header {
            width: 100%;
            height: 70px;
            padding: 15px;

            display: flex;
            flex-direction: row;
            align-items: center;

            border-bottom: 1px solid #efefef;

            .imgUser {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-color: #eee;
                cursor: progress;
                background: linear-gradient(
                        0.25turn,
                        transparent,
                        #fff,
                        transparent
                    ),
                    linear-gradient(#eee, #eee),
                    radial-gradient(
                        38px circle at 19px 19px,
                        #eee 50%,
                        transparent 51%
                    ),
                    linear-gradient(#eee, #eee);
                background-repeat: no-repeat;
                background-size: 315px 250px, 315px 180px, 100px 100px,
                    225px 30px;
                background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
                animation: ${loading} 1.5s infinite;
            }

            & > div {
                display: flex;
                flex-direction: column;
                margin-left: 15px;

                & > div {
                    cursor: progress;
                    background: linear-gradient(
                            0.25turn,
                            transparent,
                            #fff,
                            transparent
                        ),
                        linear-gradient(#eee, #eee),
                        radial-gradient(
                            38px circle at 19px 19px,
                            #eee 50%,
                            transparent 51%
                        ),
                        linear-gradient(#eee, #eee);
                    background-repeat: no-repeat;
                    background-size: 315px 250px, 315px 180px, 100px 100px,
                        225px 30px;
                    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
                    animation: ${loading} 1.5s infinite;
                }

                .name {
                    height: 12px;
                    width: 100px;
                    background-color: #eee;
                    border-radius: 3px;
                }

                .location {
                    margin-top: 5px;
                    height: 10px;
                    width: 70px;
                    //background-color: #eee;
                    border-radius: 3px;
                }
            }
        }

        .footer {
            width: 100%;
            height: 70px;
            padding: 15px;

            display: flex;
            flex-direction: column;
            justify-content: center;

            border-top: 1px solid #efefef;

            & > div {
                cursor: progress;
                background: linear-gradient(
                        0.25turn,
                        transparent,
                        #fff,
                        transparent
                    ),
                    linear-gradient(#eee, #eee),
                    radial-gradient(
                        38px circle at 19px 19px,
                        #eee 50%,
                        transparent 51%
                    ),
                    linear-gradient(#eee, #eee);
                background-repeat: no-repeat;
                background-size: 315px 250px, 315px 180px, 100px 100px,
                    225px 30px;
                background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
                animation: ${loading} 1.5s infinite;
            }

            .commentsCount {
                height: 15px;
                width: 120px;
                background-color: #eee;
                border-radius: 3px;
            }

            .postDate {
                margin-top: 5px;
                height: 10px;
                width: 70px;
                background-color: #eee;
                border-radius: 3px;
            }
        }
    }
`;

export default PostLoadingContainer;
