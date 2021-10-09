import React from "react";
import HeartIcon from "./components/hearticon";

import {
    Container,
    Post,
    PostComments,
    PostHeader,
    Comment,
    CommentContent,
    PostFooter,
    UserImage,
} from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <div>
                <Post>
                    <img
                        src="https://catracalivre.com.br/wp-content/uploads/2019/09/the-nature-conservancy-paisagem3-1.jpg"
                        alt="PostImage"
                    />
                    <div>
                        <PostHeader>
                            <UserImage
                                src="https://avatars.githubusercontent.com/u/49238044?v=4"
                                alt="ProfileImage"
                            />
                            <div>
                                <h1>John</h1>
                                <p>Stara Huata, Ucrânia</p>
                            </div>
                        </PostHeader>
                        <PostComments>
                            <Comment>
                                <UserImage
                                    src="https://avatars.githubusercontent.com/u/49238044?v=4"
                                    alt="ProfileImage"
                                />
                                <CommentContent>
                                    <p>
                                        <strong>Howard28</strong>
                                        Use the bluetooth CSS
                                    </p>
                                    <div>
                                        <p>6h</p>
                                        <strong>3 curtidas</strong>
                                    </div>
                                </CommentContent>
                                <HeartIcon />
                            </Comment>
                            <Comment>
                                <UserImage
                                    src="https://avatars.githubusercontent.com/u/49238044?v=4"
                                    alt="ProfileImage"
                                />
                                <CommentContent>
                                    <p>
                                        <strong>Gracie.Orn80</strong>
                                        The AI monitor is down, synthesize the
                                        haptic matrix so we can generate the USB
                                        feed!
                                    </p>
                                    <div>
                                        <p>5h</p>
                                        <strong>2 curtidas</strong>
                                    </div>
                                </CommentContent>
                                <HeartIcon />
                            </Comment>
                            <Comment>
                                <UserImage
                                    src="https://avatars.githubusercontent.com/u/49238044?v=4"
                                    alt="ProfileImage"
                                />
                                <CommentContent>
                                    <p>
                                        <strong>Howard28</strong>
                                        Hello World!
                                    </p>
                                    <div>
                                        <p>5h</p>
                                        <strong>1 curtidas</strong>
                                    </div>
                                </CommentContent>
                                <HeartIcon />
                            </Comment>
                            <Comment>
                                <UserImage
                                    src="https://avatars.githubusercontent.com/u/49238044?v=4"
                                    alt="ProfileImage"
                                />
                                <CommentContent>
                                    <p>
                                        <strong>Howard28</strong>
                                        Use the bluetooth CSS
                                    </p>
                                    <div>
                                        <p>6h</p>
                                        <strong>3 curtidas</strong>
                                    </div>
                                </CommentContent>
                                <HeartIcon />
                            </Comment>
                            <Comment>
                                <UserImage
                                    src="https://avatars.githubusercontent.com/u/49238044?v=4"
                                    alt="ProfileImage"
                                />
                                <CommentContent>
                                    <p>
                                        <strong>Gracie.Orn80</strong>
                                        The AI monitor is down, synthesize the
                                        haptic matrix so we can generate the USB
                                        feed!
                                    </p>
                                    <div>
                                        <p>5h</p>
                                        <strong>2 curtidas</strong>
                                    </div>
                                </CommentContent>
                                <HeartIcon />
                            </Comment>
                            <Comment>
                                <UserImage
                                    src="https://avatars.githubusercontent.com/u/49238044?v=4"
                                    alt="ProfileImage"
                                />
                                <CommentContent>
                                    <p>
                                        <strong>Howard28</strong>
                                        Hello World!
                                    </p>
                                    <div>
                                        <p>5h</p>
                                        <strong>1 curtidas</strong>
                                    </div>
                                </CommentContent>
                                <HeartIcon />
                            </Comment>
                        </PostComments>
                        <PostFooter>
                            <h1>35 comentários</h1>
                            <p>22/04/2020 - 9:10</p>
                        </PostFooter>
                    </div>
                </Post>
            </div>
        </Container>
    );
};

export default Home;
