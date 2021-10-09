import React from "react";
import { useUser } from "../../contexts/userContext";
import MorePosts from "./components/morePosts";
import Post from "./components/post";

import Container from "./styles";

const Home: React.FC = () => {
    const user = useUser();

    return (
        <Container>
            <div>
                {!user.isLoading && <Post />}
                <MorePosts />
            </div>
        </Container>
    );
};

export default Home;
