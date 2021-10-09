import React from "react";
import Post from "./components/post";

import { Container, MorePosts } from "./styles";

const Home: React.FC = () => {
    const mock = {
        uuid: "5c2b8f37-bcbd-47d4-9537-8282f8ab0a46",
        user: {
            username: "Euna95",
            avatar: null,
        },
        photo: "https://source.unsplash.com/random/800x800",
        created_at: "14/2/2021 - 10:33",
        location: {
            city: "New Emmanuel",
            country: "Puerto Rico",
        },
        comments: [
            {
                uuid: "f87aa0e4-8642-46fc-b461-2d2b61117ebc",
                user: {
                    username: "Napoleon57",
                    avatar: "https://avatars.githubusercontent.com/u/49238044?v=4",
                },
                message: "We need to index the neural AI matrix!",
                created_at: "2021-10-09T14:48:37.837Z",
                has_liked: false,
                like_count: 0,
            },
            {
                uuid: "6631ffe9-b32f-43ea-b478-38f5449c03fc",
                user: {
                    username: "Yasmeen_Johnston",
                    avatar: null,
                },
                message: "We need to input the primary USB sensor!",
                created_at: "2021-10-09T14:53:37.857Z",
                has_liked: false,
                like_count: 0,
            },
            {
                uuid: "f49772d4-64af-4ff6-8e0a-abdf2c913003",
                user: {
                    username: "Euna95",
                    avatar: null,
                },
                message:
                    "Use the haptic PNG driver, then you can generate the neural sensor!",
                created_at: "2021-10-09T14:58:37.891Z",
                has_liked: true,
                like_count: 1,
            },
            {
                uuid: "314528a9-033f-434f-8ba3-706ecc900699",
                user: {
                    username: "Ralph10",
                    avatar: "https://cdn.fakercloud.com/avatars/to_soham_128.jpg",
                },
                message: "We need to reboot the 1080p RAM panel!",
                created_at: "2021-10-09T15:03:37.907Z",
                has_liked: false,
                like_count: 2,
            },
        ],
    };

    return (
        <Container>
            <div>
                <Post post={mock} />
                <MorePosts>
                    <h1>Mais publicações</h1>
                    <div>
                        <img
                            src="https://source.unsplash.com/random/800x800"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/800x800"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/800x800"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/800x800"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/800x800"
                            alt=""
                        />
                    </div>
                </MorePosts>
            </div>
        </Container>
    );
};

export default Home;
