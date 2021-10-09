import React from "react";

import PostLoadingContainer from "./styles";

const PostLoading: React.FC = () => {
    return (
        <PostLoadingContainer>
            <div className="photo" />
            <div className="sideContent">
                <div className="header">
                    <div className="imgUser" />
                    <div>
                        <div className="name" />
                        <div className="location" />
                    </div>
                </div>
                <div className="footer">
                    <div className="commentsCount" />
                    <div className="postDate" />
                </div>
            </div>
        </PostLoadingContainer>
    );
};

export default PostLoading;
