import React from "react";

import PostLoadingContainer from "./styles";

const PostLoading: React.FC = () => {
    return (
        <PostLoadingContainer>
            <div className="imageContainer">
                <img
                    className="photo"
                    src=""
                    alt=""
                    height="800"
                    width="800"
                    onError={() => ""}
                />
            </div>
            <div className="sideContent">
                <div className="header">
                    <div className="imgUser" />
                    <div>
                        <div className="name" />
                        <div className="location" />
                    </div>
                </div>
                <div className="content" />
                <div className="footer">
                    <div className="commentsCount" />
                    <div className="postDate" />
                </div>
            </div>
        </PostLoadingContainer>
    );
};

export default PostLoading;
