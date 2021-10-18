import React from "react";
import { useUser } from "../../contexts/userContext";
import Post from "./components/post";

import Container from "./styles";
import Tagview from "../../assets/tagview.svg";

const Home: React.FC = () => {
    const user = useUser();

    return (
        <Container>
            <div>
                {!user.isLoading && (
                    <>
                        <Post />
                        <footer>
                            <img src={Tagview} alt="Tagview" />
                        </footer>
                    </>
                )}
            </div>
        </Container>
    );
};

export default Home;
