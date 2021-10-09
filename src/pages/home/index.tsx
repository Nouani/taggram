import React from "react";
import { useUser } from "../../contexts/userContext";
import Post from "./components/post";

import Container from "./styles";

const Home: React.FC = () => {
    const user = useUser();

    return (
        <Container>
            <div>{!user.isLoading && <Post />}</div>
        </Container>
    );
};

export default Home;
