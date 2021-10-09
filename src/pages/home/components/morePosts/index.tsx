import React from "react";

import MorePostsContainer from "./styles";

const MorePosts: React.FC = () => {
    return (
        <MorePostsContainer>
            <h1>Mais publicações</h1>
            <div>
                <img src="https://source.unsplash.com/random/800x800" alt="" />
                <img src="https://source.unsplash.com/random/800x800" alt="" />
                <img src="https://source.unsplash.com/random/800x800" alt="" />
                <img src="https://source.unsplash.com/random/800x800" alt="" />
                <img src="https://source.unsplash.com/random/800x800" alt="" />
            </div>
        </MorePostsContainer>
    );
};

export default MorePosts;
