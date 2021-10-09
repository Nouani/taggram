import React from "react";
import { PostProps } from "../../../../data/interfaces";
import UserImage from "../UserImage";
import Comment from "./components/comment";
import { PostContainer, PostComments, PostHeader, PostFooter } from "./styles";
import DefaultImage from "../../../../assets/default_image.png";

const Post: React.FC<PostProps> = ({ post }) => {
    function getCommentsCountFormatted(rawCommentsCount: number) {
        return `${rawCommentsCount} comentário${
            rawCommentsCount === 1 ? "" : "s"
        }`;
    }

    return (
        <PostContainer>
            <img src={post.photo} alt="PostImage" />
            <div>
                <PostHeader>
                    <UserImage
                        src={post.user.avatar || DefaultImage}
                        alt="ProfileImage"
                    />
                    <div>
                        <h1>{post.user.username}</h1>
                        <p>
                            {post.location.city}, {post.location.country}
                        </p>
                    </div>
                </PostHeader>
                <PostComments>
                    {post.comments.map(comment => (
                        <Comment key={comment.uuid} comment={comment} />
                    ))}
                </PostComments>
                <PostFooter>
                    <h1>{getCommentsCountFormatted(post.comments.length)}</h1>
                    <p>{post.created_at}</p>
                </PostFooter>
            </div>
        </PostContainer>
    );
};

export default Post;
