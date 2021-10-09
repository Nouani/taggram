import React from "react";
import { PostProps } from "../../../../data/interfaces";
import UserImage from "../UserImage";
import Comment from "./components/comment";
import { PostContainer, PostComments, PostHeader, PostFooter } from "./styles";

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
                        src={
                            post.user.avatar ||
                            "https://www.brookes.ac.uk/assets/0/1425/1426/2147484565/b4ba6acc-f7ff-4a13-9f21-0e83f8c3c9e3.png"
                        }
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
                        <Comment comment={comment} />
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
